import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12776.260382928948!2d3.0587566!3d36.7537686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadc2ef07fd55%3A0xbbb2cfb5b4e9616c!2sAlgiers!5e0!3m2!1sen!2sdz!4v1715327814391!5m2!1sen!2sdz"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Algiers, Algeria" />
        <MyInfo field="email" value="harizi.b.abdellah@gmail.com" />
        <MyInfo field="phone" value="+213698625865" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
