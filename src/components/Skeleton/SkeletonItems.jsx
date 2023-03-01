import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonItems = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={400}
    viewBox='0 0 350 400'
    backgroundColor='#494544'
    foregroundColor='#618967'
    {...props}
  >
    <rect x='2' y='29' rx='10' ry='10' width='325' height='226' />
    <rect x='2' y='265' rx='10' ry='10' width='98' height='27' />
    <rect x='2' y='303' rx='10' ry='10' width='81' height='17' />
    <rect x='2' y='336' rx='10' ry='10' width='80' height='24' />
    <rect x='212' y='319' rx='10' ry='10' width='110' height='43' />
  </ContentLoader>
);

export default SkeletonItems;
