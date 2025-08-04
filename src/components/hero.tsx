import React from 'react';

const nav = () => {
    return (
        <div>
            <div className="overflow-hidden bg-gray-900 py-36 sm:py-32 bg-[url(/assets/bg12.webp)]">
                <div className="mx-auto max-w-full py-30 px-6 lg:px-8">
                    <div className="mx-auto pl-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="p-5 lg:max-w-2xl">
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                                    Nền tảng cộng đồng dành cho fan của
                                    Shin-chan
                                </h1>
                                <p className="mt-8 text-2xl text-gray-400">
                                    Nơi bạn có thể giải trí kết nối và giao lưu
                                    với những người có cùng đam mê!!!
                                </p>
                                <button className="my-25">Tham gia ngay</button>
                                <div>
                                    <a>FB</a>
                                    <a>FB</a>
                                    <a>FB</a>
                                    <a>FB</a>
                                </div>
                                {/* <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-indigo-400"
                                            >
                                                <path
                                                    d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                            Push to deploy.
                                        </dt>
                                        <dd className="inline">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Maiores impedit perferendis suscipit
                                            eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-indigo-400"
                                            >
                                                <path
                                                    d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                            SSL certificates.
                                        </dt>
                                        <dd className="inline">
                                            Anim aute id magna aliqua ad ad non
                                            deserunt sunt. Qui irure qui lorem
                                            cupidatat commodo.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <svg
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                data-slot="icon"
                                                aria-hidden="true"
                                                className="absolute top-1 left-1 size-5 text-indigo-400"
                                            >
                                                <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                                                <path
                                                    d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                                                    clip-rule="evenodd"
                                                    fill-rule="evenodd"
                                                />
                                            </svg>
                                            Database backups.
                                        </dt>
                                        <dd className="inline">
                                            Ac tincidunt sapien vehicula erat
                                            auctor pellentesque rhoncus. Et
                                            magna sit morbi lobortis.
                                        </dd>
                                    </div>
                                </dl> */}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                width="1285"
                                height="840"
                                src="https://www.shin404.com/images/landing/hero/pc.webp"
                                alt="Product screenshot"
                                className="rounded-lg max-lg:w-[700px] max-sm:w-[500px] lg:rounded-3xl scale-120 pl-5"
                            />
                            <img
                                src="https://www.shin404.com/images/landing/hero/mobile.webp"
                                alt=""
                                className="rounded-lg max-lg:w-[140px] max-sm:w-[110px] lg:rounded-3xl -bottom-120 -left-80 absolute scale-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default nav;
