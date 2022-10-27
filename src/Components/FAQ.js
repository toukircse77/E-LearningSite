import React from 'react';

const FAQ = () => {
    return (
        <section className=" bg-gray-800 text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold text-yellow-500 sm:text-4xl">How I Manage the Project</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">A little description below</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">whice frame work do you use?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">in this project i use react js liabrary . i use tailwind css. i use daisy ui components </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">whice authentication system you use in this project?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">To protect the project from the unauthorige attems .i use firebase authentication </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">how do you complete the project?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">i create a server on nodejs then hosting the server from vercel and client site i hosting it firebase  </p>
			</details>
		</div>
	</div>
</section>
    );
};

export default FAQ;