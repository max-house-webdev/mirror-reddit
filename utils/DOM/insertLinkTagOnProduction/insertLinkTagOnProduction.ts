function creteLink(href: string) {
  const Link = document.createElement('link');
  Link.href = href;
  return Link;
}

interface IProps {
  href: string;
  referenceElementSelector: string;
}

export function insertLinkTagOnProduction({
  href,
  referenceElementSelector,
}: IProps) {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === 'production') {
    const referenceElement = document.head.querySelector(
      referenceElementSelector
    );
    const Link = creteLink(href);
    if (referenceElement && referenceElement.parentNode) {
      referenceElement.parentNode.insertBefore(Link, referenceElement);
    } else {
      document.head.appendChild(Link);
    }
  }
}
