function ExpandableSection({ id, title, lead, expanded, onToggle, children, link, linkText, note }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      <button className="learn-more-btn" onClick={() => onToggle(id)}>{expanded ? 'Show less' : 'Learn more'}</button>
      <div className={`section-details ${expanded ? 'expanded' : ''}`}>
        {children}
        {link && (
          <>
            <a className="doc-link" href={link} target="_blank">{linkText}</a>
            {note && <span className="doc-note">{note}</span>}
          </>
        )}
      </div>
    </section>
  );
}

export default ExpandableSection;
