import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

interface GameHeaderProps {
  goBack: () => void;
  like: () => void;
  share: () => void;
}

const GameHeader = ({ goBack, like, share }: GameHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrow-back-ios" size={30} color="#231851" />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={like}>
          <Icon name="favorite-border" size={30} color="#231851" />
        </TouchableOpacity>
        <TouchableOpacity onPress={share}>
          <Icon name="share" size={30} color="#231851" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameHeader;
