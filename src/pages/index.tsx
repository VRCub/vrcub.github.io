import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.headDiv)}>
        <svg viewBox="-35 -25 100 100" className={styles.backgroundAnimatePrimary} xmlns="http://www.w3.org/2000/svg">
          <path className={styles.svgPathPrimary} d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
        </svg>
        <svg viewBox="-35 -25 100 100" className={styles.backgroundAnimateSecondary} xmlns="http://www.w3.org/2000/svg">
          <path className={styles.svgPathSecondary} d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
        </svg>
        <div style={{ height: '150px' }} /> {/* 添加一个空白容器 */}
        <img className={styles.heroLogo} src="vrcub-logo/VRCub-white@svg.svg" alt="Lunova Studio Icon" />
        <div style={{ height: '20px' }} /> {/* 添加一个空白容器 */}
        <p className="hero__subtitle">
          欢迎查看VRCub官方文档
          <br />
          这里你可以查看到一些问题的解答，希望可以帮到你
          <br />
          当然，你也可以Fork我们的文档仓库进行修改，希望你能给我们更好的内容
          <br />
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://vrcub.net">
            查看我们的官网
          </Link>
        </div>
        <div style={{ height: '150px' }} /> {/* 添加一个空白容器 */}
      </div>
    </header>
  );
}

function HomepageSupport() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.supportHero)}>
      <div className={clsx('container', styles.supportDiv)}>
        <h1 style={{ fontSize: '100px' }}>🤔</h1>
        <Heading as="h1" className="hero__title">
          有些问题，这里无法解答？
        </Heading>
        <p className="hero__subtitle">
          我们有一些群聊，群聊里面的人非常《和谐友爱》，
          <br />
          你可以在群里找到管理员
          <br />
          当然，闲聊灌水也可以
          <br /><br />
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/About/JoinUs">
            查看详情
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="https://github.com/Lunova-Studio">
            算了还是 GitHub Issues 和 Discussions 吧😨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`VRCub Docs 🥳`}
      description="快速上手VRCub的内容">
      <HomepageHeader />
      <main>
        <div className={styles.mainDiv}>
          <HomepageFeatures />
          <HomepageSupport />
        </div>
      </main>
    </Layout>
  );
}