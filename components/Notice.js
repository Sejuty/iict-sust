import { Button, Card } from "flowbite-react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaAngleRight } from "react-icons/fa";
export default function Notice() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="  md:mx-10 mt-10">
        <div className=" bg-gray-50 p-10 rounded-md ">
          <h2 className="text-2xl font-bold text-center mb-2 uppercase tracking-widest text-rose-800">
            Notice
          </h2>
          <hr className="mb-10 border-2 w-1/4 m-auto border-rose-800"></hr>
          <Carousel responsive={responsive}>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </Card>
            </div>
          </Carousel>
          <Button className="m-auto mt-10 " pill={true}>
            See All
            <FaAngleRight className="ml-1 " />
          </Button>
        </div>
      </div>
    </>
  );
}
