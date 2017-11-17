import UserStore from '../../stores/domain/User';
import AppStore from '../../stores/view/App';

export default function() {
  return function() {
    const getAllStores = () => ({
      'domain.user': new UserStore(),
      'view.app': new AppStore(),
    });

    return {
      getAllStores,
    };
  }

} 
