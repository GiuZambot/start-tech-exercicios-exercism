import { NotAvailable } from "./errors";

/// <reference path="./global.d.ts" />
// @ts-check
//
//
// I think it´s brokem, I don't get any error no matter what
//
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  async free(text) {
    try {
      const translation = await this.api.fetch(text);
      return translation.translation;
    } catch (error) {
      throw error;
    }
  }


  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  async batch(texts) {
    if (texts.length === 0) throw new BatchIsEmpty();
    const traducoes = [];
    try {
      for (const buscado of texts) traducoes.push(await this.free(buscado));
    } catch (error) {
      throw error;
    }
    return traducoes;
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} busca
   * @returns {Promise<void>}
   */
  request(busca) {
    const novaPromise = (busca) => {
      return new Promise((resolve, reject) => {
        this.api.request(busca, (erro) => erro ? reject(erro) : resolve(undefined));
      })
    }
    return novaPromise(busca)
      .catch(() => novaPromise(busca))
      .catch(() => novaPromise(busca))
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  async premium(text, minimumQuality) {
    return this.api.fetch(text)
      .catch((error) => {
        if (error instanceof NotAvailable) {
          return this.request(text).then(() => this.api.fetch(text));
        } else {
          throw error;
        }
      })
      .then(tradObj => {
        if (tradObj.quality > minimumQuality) return tradObj.translation;
        throw new QualityThresholdNotMet(text);
      })
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
