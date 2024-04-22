import { Link } from 'gatsby';
import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';

const imageData = {
  aboutmagicpixel: '/landing-page/icons/introduction.png',
  navigatingthroughui: '/landing-page/icons/navigation-ui.png',
  addanewproject: '/landing-page/icons/new-project.png',
  tags: '/landing-page/icons/tags.png',
  dataelements: '/landing-page/icons/data-element.png',
  providers: '/landing-page/icons/provider.png',
  triggers: '/landing-page/icons/trigger.png',
  qualificationcriteria: '/landing-page/icons/qualification.png',
  transformers: '/landing-page/icons/transformers.png',
  publish: '/landing-page/icons/publish.png',
  livedebugging: '/landing-page/icons/debugging.png',
};

const MdxCard = ({ data }) => {
  console.log('🚀 ~ file: Card.jsx:20 ~ MdxCard ~ data:', data);
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex gap-4 align-items-center">
          <img alt={data.label} src={imageData[data.label]} width={40} />
          <Link to={data.url}>
            {' '}
            <h5 className="card-title"> {data.title}</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export function CardComp() {
  const { urlObject } = useSidebarContext();

  return (
    <>
      <div className="row">
        {urlObject?.items?.map((item, i) => (
          <div key={i} className="col-md-6 col-lg-4 mb-5 ">
            <MdxCard data={item} />
          </div>
        ))}
      </div>
    </>
  );
}
