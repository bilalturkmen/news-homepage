interface footProps {
  data: footData[];
}

const FooterAttribution: React.FC<footProps> = ({ data }) => {
  return (
    <div className="footer--attribution">
      {data.map(({ beforeText, url, label, fromName, id }) => (
        <>
          {beforeText}{" "}
          <a
            key={id}
            href={url}
            target="_blank"
            aria-label={label}
            rel="noreferrer noopener"
          >
            {fromName}
          </a>
          .{" "}
        </>
      ))}
    </div>
  );
};

export default FooterAttribution;
