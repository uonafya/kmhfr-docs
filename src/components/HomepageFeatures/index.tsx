import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Health Facility Registry',
    Svg: require('@site/static/img/undraw_building.svg').default,
    description: (
      <>
        KMHFR has over 1400 health facilities in kenya.
      </>
    ),
  },
  {
    title: 'Comprehensive Data on Health Facilities',
    Svg: require('@site/static/img/undraw_medicine.svg').default,
    description: (
      <>
        A comprehensive list of attributes of all health facilities and  community health units can be found in KMHFR
      </>
    ),
  },
  {
    title: 'Health Facility Analytics',
    Svg: require('@site/static/img/undraw_report.svg').default,
    description: (
      <>
        KMHFR provides detailed reports with a rich dashboard of Health facilities in Kenya
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
