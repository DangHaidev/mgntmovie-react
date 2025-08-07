import React from 'react';

const about = () => {
    return (
        <>
            <div className="px-6 py-10 md:p-15 flex flex-col bg-[url(/assets/about.webp)]">
                <div className="text-center">
                    <p className="font-bold text-2xl">Về chúng mình</p>
                    <h1 className="my-4">Đội ngũ đam mê dịch phim - Shin404</h1>
                    <p className="text-2xl text-gray-400">
                        Luôn nổ lực để mang đến món ăn tinh thần "đặc sắc" nhất
                        cho khán giả trung thành
                    </p>
                </div>
                <div className="lg:flex max-md:flex max-md:flex-col max-lg:grid max-lg:grid-cols-2 gap-10 md:my-20 pt-20 text-center">
                    <div className="border-2 py-15 px-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-yellow-950">
                        <h2 className="text-3xl mb-4">Tâm huyết</h2>
                        <p className="text-gray-400">
                            Chúng mình luôn trao chuốt từng câu chữ trong mỗi
                            bản dịch
                        </p>
                    </div>
                    <div className="border-2 py-15 px-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-yellow-950">
                        <h2 className="text-3xl mb-4">Tâm huyết</h2>
                        <p className="text-gray-400">
                            Chúng mình luôn trao chuốt từng câu chữ trong mỗi
                            bản dịch
                        </p>
                    </div>
                    <div className="border-2 py-15 px-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-yellow-950">
                        <h2 className="text-3xl mb-4">Tâm huyết</h2>
                        <p className="text-gray-400">
                            Chúng mình luôn trao chuốt từng câu chữ trong mỗi
                            bản dịch
                        </p>
                    </div>
                    <div className="border-2 py-15 px-3 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-600 to-yellow-950">
                        <h2 className="text-3xl mb-4">Tâm huyết</h2>
                        <p className="text-gray-400">
                            Chúng mình luôn trao chuốt từng câu chữ trong mỗi
                            bản dịch
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default about;
