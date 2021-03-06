import Flux from '@4geeksacademy/react-flux-dash';
import WP from 'wordpress-rest-api';

class WPActions extends Flux.Action{
    
    constructor(){
        super();
        this.wp = new WP({ endpoint: process.env.WP_HOST });
        this.wp.lessons = this.wp.registerRoute( 'wp/v2', '/lesson/(?P<id>)' );
        this.wp.assets = this.wp.registerRoute( 'wp/v2', '/lesson-asset/(?P<id>)' );
        this.wp.courses = this.wp.registerRoute( 'breathecode/v1', '/courses', {
            mixins: {
                user: function( val ) {
                    console.log(this);
                    return this.param( 'user', val );
                }
            }
        });
    }
    
    loadCourses(){
        this.wp.courses().user(3).then((data) => {
            this.dispatch('WPStore.setCourses', data)
        }).catch(function( err ) {
            // handle error 
            console.log("ERROR!!",err);
        });;
    }
    loadAssets(){
        this.wp.assets().then((data) => {
            this.dispatch('WPStore.setAssets', data)
        }).catch(function( err ) {
            // handle error 
            console.log("ERROR!!",err);
        });;
    }
    
}
export default new WPActions();