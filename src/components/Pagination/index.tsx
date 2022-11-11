import { View } from 'react-native';
import { styles } from './styles';

interface PaginationProps {
  entries: Array<number>;
  active: number;
}

const Pagination = ({ entries, active }: PaginationProps) => {
  return (
    <View style={styles.container}>
      {entries.map(key => {
        return (
          <View
            key={key}
            style={[active === key ? styles.dotActive : styles.dot]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
