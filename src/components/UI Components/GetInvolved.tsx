import Link from '@docusaurus/Link';
const GetInvolved =() => {
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Get Involved</h3>

                    <p className="max-w-xl mx-auto"> Be a part of the green transportation revolution! We're looking for students passionate about sustainable mobility.
                        Join our team to learn more about our projects and collaborate on cutting-edge electric vehicle projects. </p>
                </div>

                <div className="grid md:grid-cols-2 mt-8 gap-[30px]">
                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Join Our Team</h5>
                        <p className="text-slate-400 mb-4">Join us and unleash your creativity and passion for sustainable transportation. As a member, you'll have the opportunity to gain hands-on experience in design and engineering.</p>
                        <Link to="/join-our-team" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Learn How<i className="uil uil-arrow-right align-middle"></i></Link>
                    </div>

                    <div className="rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6">
                        <h5 className="text-2xl font-semibold mb-4">Become A Sponsor</h5>
                        <p className="text-slate-400 mb-4">Become a valued sponsor support our mission of advancing affordable and sustainable transportation solutions</p>
                        <Link to="/sponsors" className="btn btn-link hover:text-green-600 after:bg-green-600 duration-500 ease-in-out">Learn How<i className="uil uil-arrow-right align-middle"></i></Link>
                    </div>

                    <br/>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;
