import './show-more-link.scss';

type ShowMoreLinkProps = {
  onClick: () => void;
  anchorId: string;
  children: string;
};

function ShowMoreLink({ onClick, anchorId, children }: ShowMoreLinkProps) {
  return (
    <a href={`#${anchorId}`} className="show-more" onClick={onClick}>
      {children}
    </a>
  );
}

export default ShowMoreLink;
