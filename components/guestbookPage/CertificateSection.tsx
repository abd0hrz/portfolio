import { FaGoogle, FaJenkins, FaMicrosoft } from "react-icons/fa";
import { SiAmazonaws, SiAwsamplify, SiFacebook, SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import { AiOutlineSwapRight } from "react-icons/ai";
import Title from "./Title";

const certs = [
  {
    name: "HashiCorp Certified: Terraform Associate (002)",
    url: "https://example.com/terraform",
    icon: <SiAmazonaws className="text-6xl text-orange-500" />,
    date: "January 2024",
  },
  {
    name: "Google Cloud Certified Digital Leader",
    url: "https://example.com/gcp",
    icon: <SiGooglecloud className="text-6xl text-red-500" />,
    date: "March 2024",
  },
  {
    name: "AZ-400 Designing and implementing DevOps Solutions",
    url: "https://example.com/az400",
    icon: <SiMicrosoftazure className="text-6xl text-blue-600" />,
    date: "May 2024",
  },
  {
    name: "AZ-104 Azure Administrator Associate",
    url: "https://example.com/az104",
    icon: <FaJenkins className="text-6xl text-blue-600" />,
    date: "June 2024",
  },
];

export default function CertificateSection() {
  return (
    <section className="py-0 px-6" id="certificates">
      <section className="space-y-6 mt-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow flex items-center space-x-4"
          >
            {/* Icon */}
            <div>{cert.icon}</div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-gray-100">{cert.name}</h3>
                <span className="text-xl text-gray-500">{cert.date}</span>
              </div>
              <a
                href={cert.url}
                className="text-gray-500 text-xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                click here to verify my certification
              </a>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
