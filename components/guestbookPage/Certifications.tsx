interface Certification {
  name: string;
  url: string;
  icon: React.ReactNode;
  date: string;
}

interface Props {
  certifications: Certification[];
}

export default function Certifications({ certifications }: Props) {
  return (
    <div className="space-y-10">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 rounded-md shadow-sm flex items-center space-x-6"
        >
          {/* Icon on the left */}
          <div>{cert.icon}</div>

          {/* Text content */}
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">{cert.date}</p> {/* Date */}
            <h3 className="text-4xl font-bold text-center mb-2">{cert.name}</h3>
            <a
              href={cert.url}
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here to verify my certification
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
