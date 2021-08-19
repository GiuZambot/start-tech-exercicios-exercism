import { twoFer } from './two-fer';

describe('twoFer()', () => {
    test('no name given', () => {
        expect(twoFer()).toEqual('One for you, one for me.');
    });

    test('a name given', () => {
        expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
    });

    test('another name given', () => {
        expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
    });

    test('empty name given', () => {
        expect(twoFer('')).toEqual('One for you, one for me.');
    });

    test('null name given', () => {
        expect(twoFer(null)).toEqual('One for you, one for me.');
    });
});