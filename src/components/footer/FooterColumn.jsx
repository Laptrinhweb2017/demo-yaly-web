// components/footer/FooterColumn.jsx

export default function FooterColumn({ title, links }) {
  return (
    <div className="space-y-4">
      <h3 className="text-[15px] font-medium text-white tracking-wide">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              className="text-[14px] text-[#cfcfcf] hover:text-white transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
