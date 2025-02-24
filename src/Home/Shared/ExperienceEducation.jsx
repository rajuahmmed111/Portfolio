// import certificateLink from "../../assets/certificate.pdf";

const ExperienceEducation = () => {
  return (
    <div id="education" className=" py-14">
      <div className="container mx-auto px-5 md:px-20 lg:px-20 md:flex justify-evenly">
        <h2 className="text-4xl text-gray-200 font-bold text-center mb-8">
          Experience & Education
        </h2>

        <ul className="timeline timeline-vertical">
          <li>
            <h3 className="timeline-start text-3xl font-semibold mb-6 text-emerald-400">
              Education
            </h3>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-emerald-100 p-5 rounded-lg shadow">
              <h4 className="text-2xl font-bold">Higher Secondary School</h4>
              <p className="text-gray-600 font-bold">
                Chowhali Adarashow High School
              </p>
              <p className="text-gray-600 font-semibold">2017 - 2019</p>
              <p className="mt-3">
                - Major: Science.
                <br />- Activities: Member of the Science Club, participated in
                science fairs.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-emerald-100 p-5 rounded-lg shadow">
              <h4 className="text-[22px] font-bold">
                Diploma in Computer Technology
              </h4>
              <p className="text-gray-600 font-bold">
                Tangail Polytechnic Institute
              </p>
              <p className="text-gray-600 font-semibold">2019 - 2023</p>
              <p className="mt-3">
                - Coursework: Web Development, Database Management, Software
                Engineering.
                <br />- Activities: Member of the Computer Club, participated in
                coding competitions.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <h3 className="timeline-start text-3xl font-semibold mb-6 text-emerald-400">
              Experience
            </h3>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-emerald-100 p-5 rounded-lg shadow">
              <h4 className="md:text-2xl text-xl font-bold">
                Web Development Course
              </h4>
              <p className="text-gray-600 font-bold">Programming Hero</p>
              <p className="text-gray-600 font-semibold">Completed in 2023</p>
              <p className="my-3">
                - Learned HTML5, CSS3, Tailwind CSS, Material UI, JavaScript,
                Tan-stack Query, React.js, Redux, Next.js, ShadCN, TypeScript
                Express.JS, Node.JS, TypeScript, MongoDB, Mongoose(ODM),
                Prisma(ORM), Web-Socket, Multer, Node-Corn, JWT, OAuth.
                <br />
                - Completed various hands-on projects to apply the learned
                concepts.
                <br />- Participated in coding challenges and collaborative
                coding sessions.
              </p>
              {/* <div className=" py-4 border-t border-emerald-400">
                <a
                  href={certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-indigo-900 py-4 border-t border-gray-200 font-bold"
                >
                  View Certificate
                </a>
              </div> */}
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-emerald-100 p-5 rounded-lg shadow">
              <h4 className="text-2xl font-bold">Web Developer Intern</h4>
              <p className="text-gray-600 font-bold">SoftLab IT Ltd.</p>
              <p className="text-gray-600 font-semibold">January-June 2023</p>
              <p className="mt-3">
                - Assisted in developing responsive web applications using
                avaScript, Tan-stack Query, React.js, Redux, Next.js, ShadCN,
                TypeScript Express.JS, Node.JS, TypeScript, MongoDB,
                Mongoose(ODM), Prisma(ORM), Web-Socket, Multer, Node-Corn, JWT,
                OAuth.
                <br />
                - Collaborated with senior developers to design and implement
                new features.
                <br />- Participated in code reviews and contributed to
                improving code quality.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceEducation;
