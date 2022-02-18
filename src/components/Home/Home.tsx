import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type HomeProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Home = (props: HomeProps): JSX.Element => (
  <div>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<HomeProps>(Home);
