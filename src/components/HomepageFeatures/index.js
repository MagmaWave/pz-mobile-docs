import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Curta a Paisagem',
    Svg: require('@site/static/img/relax.svg').default,
    description: (
      <>
        Curtir a paisagem é bom, quando não puder conhecer novos lugares traremos
        novos lugares até você.
      </>
    ),
  },
  {
    title: 'Curta o Momento',
    Svg: require('@site/static/img/game_world.svg').default,
    description: (
      <>
        Existem infinitas formas de se divertir, trouxemos algumas opções pra você.
      </>
    ),
  },
  {
    title: 'Fizemos pra Você',
    Svg: require('@site/static/img/share.svg').default,
    description: (
      <>
        Independente de qualquer coisa, sua diversão é a prioridade.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
