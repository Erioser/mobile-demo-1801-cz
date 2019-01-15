import '../../stylesheets/common.css'
import '../../stylesheets/reset.css'
import './stylesheets/mine.css'
import '../../utils/tap'
import mineController from './javascripts/controllers/mineController'


FastClick.attach(document.body);

mineController.run()