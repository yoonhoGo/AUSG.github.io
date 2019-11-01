/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl, organizationName } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className='homeContainer'>
        <div className='homeSplashFade'>
          <div className='wrapper homeWrapper'>{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className='projectLogo'>
        <img src={props.img_src} alt='Project Logo' />
      </div>
    )

    const ProjectTitle = () => (
      <h2 className='projectTitle'>
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className='section promoSection'>
        <div className='promoRow'>
          <div className='pluginRowBlock'>{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className='inner'>
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={`https://github.com/${organizationName}`}>
              GITHUB
            </Button>
            <Button href='https://www.facebook.com/ausgkr'>FACEBOOK</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    )

    const TryOut = () => (
      <Block id='try' align='left'>
        {[
          {
            content: `AWSKRUG는 2012년 시작된 아마존 웹서비스 한국 사용자모임으로<br />
              AWS클라우드를 처음 배우는 분들로 부터 고급 개발자까지 정보 교류를 위해 만들었습니다.<br />
              각종 반기 및 월간 **세미나**, 지역별 분야별 **소모임** 그리고 **글로벌 유저그룹** 연계 활동 등
              다양한 프로젝트를 수행하고 있으며, 자세한 내용은 아래 소개 자료를 참고하시기 바랍니다.`,
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'AWSKRUG',
          },
        ]}
      </Block>
    )

    const Description = () => (
      <Block background='dark' align='left'>
        {[
          {
            content: `AWS와 개발에 열정을 가진 대학생 멤버들이 있습니다.<br />
              같은 다양한 관심사를 가진 대학생들과 소통하며 지식을 넓혀갈 수 있고
              함께 성장할 수 있습니다.`,
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'AUSG와 함께해요!',
          },
        ]}
      </Block>
    )

    const LearnHow = () => (
      <Block background='light' align='left'>
        {[
          {
            content: `AUSG는 정기적으로 AWS관련 Hands-On 세션을 진행합니다.<br />
                      세션 진행 외에도 개인과 그룹의 발전을 위해 내부 스터디를 진행하며<br />
                      AWSKRUG 및 AWS Educate 행사 및 해커톤에 참여하여 서포터로 활동합니다.`,
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'AUSG의 활동',
          },
        ]}
      </Block>
    )
    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className='productShowcaseSection paddingBottom'>
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className='logos'>{showcase}</div>
          <div className='more-users'>
            <a className='button' href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className='mainContainer'>
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    )
  }
}

module.exports = Index
