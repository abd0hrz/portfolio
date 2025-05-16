import { FaGoogle, FaJenkins, FaMicrosoft } from "react-icons/fa";
import { SiAmazonaws, SiAwsamplify, SiFacebook, SiFortinet, SiGooglecloud, SiMicrosoftazure, SiOracle } from "react-icons/si";
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
    name: "Microsoft Certified: Azure Fundamentals",
    url: "https://www.credly.com/badges/3e2479ea-5354-4020-9428-aee21a51426f",
    icon: <SiMicrosoftazure className="text-6xl text-[#0078D4]" />,
    date: "December 2022",
  },
  {
    name: "Oracle Cloud Infrastructure Certified Foundations Associate",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=22DA8DF3D90BD3A3630BED2ACF4EB5F26F5616919FC4E1817CB216F1C469B2FD",
    icon: <SiOracle className="text-6xl text-[#F80000]" />,
    date: "August 2022",
  },
  {
    name: "Fortinet Certified Fundamentals Cybersecurity",
    url: "https://www.credly.com/badges/fda8b87c-6ba9-421e-b546-1a5d41e87b58",
    icon: <SiFortinet className="text-6xl text-red-600" />,
    date: "June 2022",
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
