"""
File: app.py
Author: ricardoveronica
Email: hola@ricardoveronica.com
Github: https://github.com/ricardoveronica
Description: Memoization and recursion for fibonacci
"""

# from functools import lru_cache
# @lru_cache(maxsize = 1000)
# recomendation

fibonacci_cache = {}


def fibonacci(n):
    """
    Fibonacci function test
    """
    if n in fibonacci_cache:
        return fibonacci_cache[n]
    if n == 1:
        value = 1
    if n == 2:
        value = 1
    if n > 2:
        value = fibonacci(n-1) + fibonacci(n-2)

    fibonacci_cache[n] = value

    return value


for n in range(1, 1001):
    print('{}:{}'.format(n, fibonacci(n)))
