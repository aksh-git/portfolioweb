import React from 'react'

function Logo(props) {
  const color  = props.color;
  const { height, width } = props.options;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill={color} xmlns="http://www.w3.org/2000/svg" class="text-white dark:text-white"><g clip-path="url(#header-logo)"><path d="M8.96875 0L22.9421 24L27.5953 15.9991L18.282 0H8.96875Z" fill={color}></path><path d="M8.96875 16.4571L13.8013 24H23.4561L18.6304 16.4571H8.96875Z" class="fill-[#000000] dark:fill-[#fafafa]" fill-opacity="0.4"></path><path d="M4.82911 7.54286L0 15.7714L4.83256 24L14.4873 7.54286H4.82911Z" fill={color}></path></g><defs><clipPath id="header-logo"><rect width="109" height="24" fill={color}></rect></clipPath></defs></svg>
  )
}

export default Logo