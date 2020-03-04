import argparse
import cv2
import os
import shutil


def parseargs():
    parser = argparse.ArgumentParser()
    parser.add_argument('-i', '--input-dir', type=str)
    parser.add_argument('-o', '--output-dir', type=str)
    parser.add_argument('-dh', '--down-sample-height', type=int)
    parser.add_argument('-dw', '--down-sample-width', type=int)
    args = parser.parse_args()
    return args


def main():
    args = parseargs()

    if os.path.exists(args.output_dir):
        shutil.rmtree(args.output_dir)
    os.makedirs(args.output_dir)

    for img_name in os.listdir(args.input_dir):
        if os.path.splitext(img_name)[1] in [".png", ".jpg", ".jpeg"]:
            img = cv2.imread(os.path.join(args.input_dir, img_name))
            print(img_name)
            if img.shape[0] > img.shape[1]:
                if img.shape[0] > args.down_sample_height :
                    img = image_resize(img, height=args.down_sample_height)
            else:
                if img.shape[1] > args.down_sample_width:
                    img = image_resize(img, width=args.down_sample_width)
            cv2.imwrite(os.path.join(args.output_dir, img_name), img)


# https://stackoverflow.com/questions/44650888/resize-an-image-without-distortion-opencv
# author: thewaywewere
def image_resize(image, width=None, height=None, inter=cv2.INTER_AREA):
    # initialize the dimensions of the image to be resized and
    # grab the image size
    dim = None
    (h, w) = image.shape[:2]

    # if both the width and height are None, then return the
    # original image
    if width is None and height is None:
        return image

    # check to see if the width is None
    if width is None:
        # calculate the ratio of the height and construct the
        # dimensions
        r = height / float(h)
        dim = (int(w * r), height)

    # otherwise, the height is None
    else:
        # calculate the ratio of the width and construct the
        # dimensions
        r = width / float(w)
        dim = (width, int(h * r))

    # resize the image
    resized = cv2.resize(image, dim, interpolation=inter)

    # return the resized image
    return resized


if __name__ == '__main__':
    main()
