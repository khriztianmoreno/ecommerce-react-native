import reazy from 'reazy';
import routerActions from 'reazy-native-router-actions';

import mobx from './services/mobx';
import reactNative from './services/react-native';

const app = reazy();

app.use(mobx(), 'state');
app.use(routerActions(), 'routerActions');
app.use(reactNative(), 'reactNative');

export default app;
