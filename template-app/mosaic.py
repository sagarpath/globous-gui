# import numpy as np
import cv2
import sys
import os


def main():
    cap = cv2.VideoCapture('./vid.MP4')
    # cv2.namedWindow('frame', cv2.WINDOW_NORMAL)
    i = 0
    # print cap
    # print cap.isOpened()
    # print cv2.__version__
    while(cap.isOpened()):
        ret, frame = cap.read()
        # print ret
        if ret:
            i = i + 1
            print i
            sys.stdout.flush()
            if i == 30:
                break
            # cv2.imshow('frame', frame)
            name = 'frames/frame' + str(i) + '.png'
            # print name
            cv2.imwrite(name, frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break

    cap.release()
    cv2.destroyAllWindows()
    print 'done'


if __name__ == '__main__':
    main()
