from __future__ import print_function
# from calc import calc as real_calc
# import sys
import zerorpc
# import cv2
# import numpy as np


# class CalcApi(object):
#     def calc(self, text):
#         """based on the input text, return the int result"""
#         try:
#             print('hello')
#             return real_calc(text)
#         except Exception as e:
#             print(e)
#             return 0.0

#     def echo(self, text):
#         """echo any text"""
#         return text


def parse_port():
    return 4242


class StreamingRPC(object):
    @zerorpc.stream
    def streaming_range(self, fr, to, step):
        return xrange(fr, to, step)

    def echo(self, text):
        return text

    def sending(self):
        return 2


# def main():
#     addr = 'tcp://127.0.0.1:' + str(parse_port())
#     s = zerorpc.Server(CalcApi())
#     s.bind(addr)
#     print('start running on {}'.format(addr))
#     s.run()


# if __name__ == '__main__':
#     main()


s = zerorpc.Server(StreamingRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()
