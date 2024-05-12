import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root/Root.tsx';

// Define the Home component with a counter
const Home = () => {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<h1>RedBack Company Fit </h1>
			<p>Welcome to the Home page for RedBack Company</p>
			<button onClick={handleClick}>Click to support Redback Company</button>
			<p>RedBackd Supported {count} times</p>
		</div>
	);
};

// Define the About component with detailed text
const About = () => (
	<div>
		<h1>Company Profile</h1>
		<p>Find out what Redback is about.</p>
		<h2>Redback Operations company profile</h2>
		<h3>Company Mission</h3>
		<p>Redback Operations is dedicated to revolutionizing the fitness experience by developing state-of-the-art connected fitness devices that not only enhance the enjoyment of physical activity but also its effectiveness. At the heart of our mission is a relentless drive for innovation and continuous improvement. This commitment is reflected in our diverse portfolio of projects, each designed to elevate the quality and effectiveness of training while also focusing on injury prevention. Through these initiatives, Redback Operations aims to empower individuals in their pursuit of fitness, making every workout smarter, safer, and more enjoyable.</p>
		<h3>Company Directors</h3>
		<p>Trimester 1 - A/Prof. Daniel Lai (Associate Professor)<br />
		Trimester 2 - Prof Seng Loke (Professor In Computer Science)<br />
		Trimester 3 - Dr Imali Dias (Senior Lecturer)</p>
		<h3>Company Structure</h3>
		<p>Redback Operations is committed to elevating its professional standards by establishing a comprehensive baseline for documenting information, procedures, findings, and more, in a unified and systematic manner. This initiative marks a significant shift from when projects within Redback operated independently. The inception of the Data Warehousing project and the formation of a dedicated cybersecurity team have highlighted similarities in processes across different projects, leading to the creation of a unified standard of quality. This has resulted in the production of guides on Machine Learning, Data Scraping from the web, security guidelines, and an asset register for projects, enhancing visibility and trackability of past endeavours.</p>
		<p>The company's current project portfolio reflects this structured approach to documentation and process management, adhering to recognized quality management standards. Redback Operations is currently spearheading five major initiatives:</p>
		<ul>
			<li>Project 1: VR Sun Cycle + Smart Bike Project</li>
			<li>Project 2: Elderly Wearable Technology</li>
			<li>Project 3: Athlete Wearable Tech (Previously: Sports Performance Analysis)</li>
			<li>Project 4: Crowd Monitoring & Player Tracking (AKA Project Orion)</li>
			<li>Cybersecurity & Data Warehouse Team</li>
		</ul>
		<p>Through these diverse yet interconnected projects, Redback Operations demonstrates its commitment to innovation, security, and excellence. By standardizing processes and emphasizing quality management, the company not only streamlines its operations but also sets a solid foundation for future growth and success.</p>
		<p>2024 Trimester Company Lead: Matt Hollington and Mehak</p>
		<h3>Projects</h3>
		<h4>Project 1: VR Sun Cycle + Smart Bike Project</h4>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>This project aims to revolutionize indoor exercise by merging Virtual Reality (VR) and Smart Bike technologies, creating an immersive workout experience that transcends traditional fitness routines. Initially conceived as two separate endeavours—SuncycleVR and the Smart Bike—these projects have now been unified. The Smart Bike serves as an intuitive controller within the VR environment, with IoT technology enabling real-time turning and movement based on the user's pedalling speed.</p>
		<p>The integration of pedal rotations to control the virtual bike's speed marks a significant milestone in achieving a seamless, realistic exercise experience. Meanwhile, the VR component is under active development, with plans to expand beyond the existing starting zone and cityscape. Future updates aim to introduce challenging terrains, such as hills, to leverage the Smart Bike's incline feature, adding an extra layer of difficulty and resistance to workouts.</p>
		<p>Leadership for this ambitious project is divided among three senior members in Trimester 1 2024, each responsible for a distinct aspect of development:</p>
		<ul>
			<li>Jai Wats oversees VR interactions, task planning, and team coordination.</li>
			<li>Krishn Prayag leads IoT integration, ensuring seamless communication between the Smart Bike, VR environment, and associated mobile app.</li>
			<li>Boerhu Bao spearheads the design of VR environments and assets, crafting engaging and visually captivating virtual landscapes for users to explore.</li>
		</ul>
		<p>As the project progresses, the team is focused on enriching the VR experience with interactive missions and environments, pushing the boundaries of what's possible in virtual fitness.</p>
		<p>Redback Project 1 VR Sun Cycle + Smart Bike Project Showcase (T3 2023)</p>
		<p>Tech Stack:</p>
		<ul>
			<li>Software:
				<ul>
					<li>UNITY</li>
					<li>Flutter SDK</li>
					<li>Android Studio</li>
					<li>Firebase Authentication</li>
					<li>Firestore Database</li>
					<li>Hive MQ</li>
					<li>Adobe Photoshop</li>
					<li>Adobe Illustrator</li>
					<li>Raspberry Pi Editor</li>
					<li>Paho-mqtt</li>
					<li>Google Cloud Platform (GCP)</li>
					<li>R Studio</li>
					<li>Tableau</li>
				</ul>
			</li>
			<li>Hardware:
				<ul>
					<li>Raspberry Pi</li>
					<li>DFR Buttons</li>
				</ul>
			</li>
		</ul>
		<h4>Project 2: Elderly Wearable Technology</h4>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>This project is dedicated to harnessing the potential of wearable technology to significantly enhance the quality of life for the elderly. It skilfully employs advanced data analytics, innovative web platforms, and sophisticated mobile app development tools to meet its goals.</p>
		<p>At the heart of the project is the development of intuitive and user-friendly wearable devices, meticulously crafted for the elderly. These devices are tailored to meet several crucial needs, including comprehensive health monitoring, efficient fall detection, and the prevention of bedsores by providing timely alerts for positional changes. A pivotal aspect of the project is its commitment to bolstering social connectivity among the elderly, thereby enriching their overall well-being and safety. Features like fall notifications, emergency alerts, heart rate monitoring, and activity tracking are seamlessly integrated into these devices. This integration is done with the aim of not only improving the daily lives of the elderly but also empowering them with the necessary tools to maintain their health and independence proactively.</p>
		<p>This initiative encapsulates the project's holistic approach towards leveraging state-of-the-art wearable technology for effective injury prevention and diligent health monitoring. It is specially tailored to address the distinct needs of the elderly, ensuring they receive the care and attention they deserve.</p>
		<p>In the coming Trimester 1, senior member Aman Kag will step into the role of project lead, guiding the project towards its ambitious goals.</p>
		<p>Redback Project 2 Wearable Technology + Wearable Sensor Project Showcase (T3 2023)<br />
		Redback Project 2 Wearable Technology + Wearable Sensor Project App Development Showcase (T3 2023)</p>
		<p>Tech Stack:</p>
		<ul>
			<li>Programming Language:
				<ul>
					<li>Python</li>
				</ul>
			</li>
			<li>Machine Learning and Data Processing:
				<ul>
					<li>TensorFlow</li>
					<li>Keras</li>
					<li>Scikit-learn</li>
				</ul>
			</li>
			<li>Task and Project Management:
				<ul>
					<li>Trello</li>
				</ul>
			</li>
			<li>Other Libraries and Tools:
				<ul>
					<li>Pandas and NumPy</li>
					<li>Matplotlib</li>
				</ul>
			</li>
		</ul>
		<h4>Project 3: Athlete Wearable Tech (Previously Sports Performance Analysis)</h4>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>The Athlete Wearables Tech initiative, previously known as the Sports Performance Analysis project, is dedicated to exploiting the vast potential of data derived from wearable technology in various sports. This pioneering project aims at augmenting athletic performance through detailed data analytics and advanced predictive modelling. By leveraging sophisticated tools such as Python and Power BI, the initiative delves deep into the essence of sports analytics, providing customised insights to enhance training and performance across diverse disciplines. The project has previously encompassed several key areas:</p>
		<ul>
			<li>Cycling: Here, an in-depth analysis of metrics like heart rate, speed, and distance is conducted to formulate bespoke training plans. These plans are meticulously tailored to meet each athlete's unique needs, taking into account variables such as age and health.</li>
			<li>Cricket: The focus is on harnessing new data sources to broaden the analytical scope, with objectives including predicting match outcomes and pinpointing standout players through extensive statistical analysis.</li>
			<li>Football (Soccer): The project is advancing the analysis of both team and individual performances. This involves an in-depth examination of team statistics and player contributions, aiming to identify the statistical factors that distinguish the top teams and players.</li>
		</ul>
		<p>Central to this project is a commitment to refining predictive models, particularly in cycling, and expanding into running. Additionally, significant efforts are being made to develop a prototype web application. This application is envisioned not only as a repository for analysis and insights but also as a dynamic tool for planning and monitoring training and competition programs. It will enable athletes to upload their data, marrying personal performance metrics with wider analytical findings.</p>
		<p>As part of a comprehensive ecosystem dedicated to athlete data collection and analysis, this project presents a unique opportunity for collaboration with teams working on related initiatives, significantly extending the reach and impact of our efforts.</p>
		<p>In the coming Trimester 1, senior member Brendan James Kay will step into the role of project lead, guiding the project towards its ambitious goals.</p>
		<p>Redback Project 3 Sports Performance Analysis Showcase (T3 2023)<br />
		Please also review the showcase videos for Project 2, as the sensor technology component was integrated into this project in the previous trimester.</p>
		<p>Tech Stack:</p>
		<ul>
			<li>Data Storage:
				<ul>
					<li>Google Cloud Platform (potential migration to Azure)</li>
					<li>GitHub</li>
				</ul>
			</li>
			<li>Analysis tools:
				<ul>
					<li>Python</li>
					<li>R</li>
				</ul>
			</li>
			<li>Visualisation Tools:
				<ul>
					<li>Power BI</li>
					<li>Tableau</li>
				</ul>
			</li>
			<li>Web Application Development:
				<ul>
					<li>Adobe XD</li>
				</ul>
			</li>
		</ul>
		<h4>Project 4: Crowd Monitoring & Player Tracking (AKA Project Orion)</h4>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>Named after the astute hunter of Greek mythology and the constellation that illuminates our night sky, Project Orion represents a pioneering venture poised to redefine our engagement with sports. Project Orion is a cutting-edge initiative designed to revolutionise the way we perceive and interact with the sports field. Orion, renowned for his ability to never lose track of his target, perfectly embodies our mission.</p>
		<p>Project Orion's primary objective is to forge an intelligent, real-time tracking system for athletes, employing cutting-edge wearable IoT (Internet of Things) technology. By harmonising sophisticated sensor technology, advanced wireless communications, and insightful data analytics, Project Orion is set to profoundly enhance our comprehension of athletes' movements, interactions, and overall performance on the field.</p>
		<p>At the heart of Project Orion lies its formidable data analysis prowess. Utilising the power of machine learning and predictive modelling, the project aims to transform complex streams of sensor data into practical, actionable insights. Whether it's foreseeing potential injuries, pinpointing areas prone to overcrowding, or monitoring athletes' fatigue levels, Project Orion's predictive capabilities are designed to convert raw data into essential knowledge. This knowledge will not only bolster safety measures but also amplify performance standards in various sports.</p>
		<p>In essence, Project Orion seeks to mirror the guiding brilliance of its celestial counterpart, aspiring to illuminate the sports technology landscape with innovative strategies focused on athlete safety and performance enhancement. This venture is poised to redefine the frontiers of technological applications in sports, positioning Project Orion as a pioneer and a source of inspiration in its field.</p>
		<h3>Data Warehousing Team</h3>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>This project is a forward-thinking initiative aimed at revolutionizing data management and analysis within the Redback Operations company. By harnessing the power of cutting-edge technologies such as Tableau for data modelling, Jenkins for ETL processes, and Google BigQuery for cloud data warehousing, this project seeks to significantly enhance data efficiency and integrity. Our approach is cantered on facilitating seamless integration across diverse operating systems, ensuring that all students, regardless of their OS, can contribute effectively.</p>
		<p>Key goals for this project include fostering cross-platform collaboration, exploring cloud solutions through a proof of concept with Microsoft Azure, and transitioning from PowerBI to Tableau for an OS- independent, scalable, and improved data analytics experience. These efforts are designed to optimize data analytics and reporting operations, laying the foundation for more efficient data processing and management practices.</p>
		<p>Long-term objectives focus on eliminating OS dependencies for locally installed software, meticulously documenting new tools on Confluence, and consolidating all data processes into a single cloud offering, specifically Microsoft Azure. By leveraging Azure's robust offerings, we aim to create fault-tolerant, efficient, and performant data pipelines that not only meet but exceed our data management and analysis needs. Additionally, we plan to integrate with other project teams to bring all data warehousing efforts under one unified strategy, further enhancing Redback's data handling capabilities.</p>
		<p>In Trimester 1, this team will be consolidated with the Cybersecurity Team led by senior member Joel Daniel.</p>
		<p>Redback Project 4 Data Warehousing Showcase (T3 2023)</p>
		<p>Tech Stack:</p>
		<ul>
			<li>Tableau</li>
			<li>Confluence</li>
			<li>Jenkins</li>
			<li>Azure</li>
			<li>Trello</li>
			<li>GitHub</li>
		</ul>
		<h3>Cybersecurity Team</h3>
		<p>Product Owner: Acting Company Director of Redback</p>
		<p>The Cybersecurity Team at Redback Operations has made commendable strides in enhancing the organization's cybersecurity landscape during a particularly intense six-week trimester. Despite facing challenges such as restricted access to Google Cloud, which impacted the implementation of technical solutions, the team's dedication has significantly improved Redback's cybersecurity environment. This improvement spans both human and system aspects, encompassing the development and enforcement of policies and procedures, secure code review practices, and the deployment of security solutions. These efforts have not only bolstered the security of Redback's operations but have also fostered a culture of heightened security awareness and readiness across the company.</p>
		<p>The team's progress, slightly ahead of schedule as per the Cybersecurity Trello Board, underscores the proactive and efficient approach taken towards achieving their objectives. This progress reflects the team's commitment to maintaining and advancing Redback's cybersecurity measures, ensuring that the company's defences remain robust and adaptive to evolving threats. It's important to recognize that cybersecurity is an ongoing journey, with the team poised to address any areas identified as needing further enhancement in the upcoming trimester.</p>
	</div>
);

const router = createBrowserRouter([
	{
		element: <Root />,
		errorElement: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
