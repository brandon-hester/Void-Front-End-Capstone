import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton
} from 'react-share';
import {
  SocialMediaContainer,
  SocialMediaIcon
} from '../styles/SocialMedia.styled';
import facebookLogo from '../../../images/facebookLogo.png';
import twitterLogo from '../../../images/twitterLogo.png';
import pinterestLogo from '../../../images/pinterestLogo.png';

export default function SocialMedia({ currentImage }) {
  const url = window.location.href;
  console.log(currentImage);
  console.log(url);
  return (
    <SocialMediaContainer>
      <FacebookShareButton url={url} data-testid="icons">
        <SocialMediaIcon src={facebookLogo} title="Facebook" />
      </FacebookShareButton>
    <TwitterShareButton url={url} data-testid="icons">
        <SocialMediaIcon src={twitterLogo} title="Twitter" />
      </TwitterShareButton>
      <PinterestShareButton
        url={url}
        media={currentImage}
        data-testid="icons"
      >
        <SocialMediaIcon src={pinterestLogo} title="Pinterest" />
      </PinterestShareButton>
    </SocialMediaContainer>
  );
}
