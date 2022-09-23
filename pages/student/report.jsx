import React from 'react'

const Report = () => {
    return (
        <>
            <div className="flex justify-center text-3xl">
                <div className=" bg-transparent w-[75%] h-[75%] border-black border-2 m-6 rounded-lg">

                    <div className="bg-slate-400 ">
                        <h1 className="text-3xl pt-5 text-center  text-slate-900 rounded-md p-2">
                            A B C College Of Engineering
                        </h1>

                        <h1 className="text-3xl text-center text-slate-900 rounded-md p-2">
                            Report
                        </h1>

                    </div>

                    <h1 className="text-3xl text-center my-2 bg-slate-500 text-slate-900 p-1">
                    </h1>
                    <h1 className="text-3xl text-center my-2 bg-slate-500 text-slate-900 p-1">
                    </h1>

                    <div className="flex flex-row mx-4 my-5">
                        <h3 className="p-2 m-2">Mandar Kulkarni</h3>
                        <h3 className="p-2 m-2 ml-64">Sem 5</h3>
                    </div>

                    <div className="flex flex-row mx-4 my-5">
                        <h3 className="p-2 m-2">Roll:20104100</h3>
                        <h3 className="p-2 m-2 ml-72">2022-23</h3>
                    </div>

                    <div className="flex justify-center">

                        <div className="w-1/3 py-4 text-3xl text-center">
                            <div className="flex flex-col">
                                <div className="">Internal Test - 1</div>
                                <div className="mt-6">17</div>

                            </div>
                        </div>


                        <div className="w-1/3 py-4 text-3xl text-center">
                            <div className="flex flex-col">
                                <div className="">Internal Test - 2</div>
                                <div className="mt-6">19</div>

                            </div>
                        </div>

                        <div className="w-1/3 py-4 text-3xl text-center">
                            <div className="flex flex-col">
                                <div className="">Semester Exam</div>
                                <div className="mt-6">60</div>
                            </div>
                        </div>

                        <div className="w-1/3 py-4 text-3xl text-center">
                            <div className="flex flex-col">
                                <div className="">Total Marks</div>
                                <div className="mt-6">78</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row mx-4 my-5">
                        <h3 className="p-2 m-2">Grading System :</h3>
                    </div>

                    <div className="flex flex-col mx-4 my-5">
                        <h3 className="px-2 mx-2">A : 100-85</h3>
                        <h3 className="px-2 mx-2">B : 85-75</h3>
                        <h3 className="px-2 mx-2">C : 75-65</h3>
                        <h3 className="px-2 mx-2">D : 65-Below</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report;