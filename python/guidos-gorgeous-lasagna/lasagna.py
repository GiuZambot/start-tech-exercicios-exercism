'''
Functions for know the time of preparation of lasagnas.
'''

EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


def bake_time_remaining(min_in_the_oven):
    '''
    :param elapsed_bake_time: int baking time already elapsed
    :return: int remaining bake time derived from 'EXPECTED_BAKE_TIME'

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    '''

    return EXPECTED_BAKE_TIME - min_in_the_oven


def preparation_time_in_minutes(layers):
    '''
    :param layers: int layers of the lasagna
    :return: int time of preparation

    '''

    return PREPARATION_TIME * layers


def elapsed_time_in_minutes(layers, min_in_the_oven):
    '''
    :param layers: int layers of the lasagna
    :param min_in_the_oven: int min already on the oven
    :return: int time of preparation until now

    '''
    return preparation_time_in_minutes(layers) + min_in_the_oven
