import {Post} from '../models/Post';
import {Subject} from 'rxjs/Subject';
export class posts{
	
	private MyPosts:Post[]=[
		new Post(
			0, 
			'laoreet blandit', 
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ligula dolor, vestibulum vitae neque vitae, ornare dictum nunc. Suspendisse aliquet ipsum in vestibulum placerat. Morbi lacus risus, viverra nec magna eget, pretium dapibus dolor. Curabitur maximus lacinia orci, eget placerat diam fermentum quis. Morbi libero felis, accumsan vel lorem et, consequat tincidunt nulla. Mauris sed sodales tortor. Praesent vitae ipsum congue, varius ipsum a, pulvinar mi. Praesent a velit lectus. Curabitur ac ante vitae neque tincidunt facilisis. Nullam ultricies quam sit amet dui pellentesque, non tempor justo euismod. Maecenas pellentesque malesuada ultrices. Nam non ante massa. Maecenas non fermentum risus, eu gravida ligula.', 
			0, 
			new Date
		)
	];

	appareilsSubject = new Subject<Post[]>();

	emitAppareilSubject() {
		this.appareilsSubject.next(this.MyPosts.slice());
	}

	addPost(title: string, content: string) {

	    const appareilObject :Post= 
	    new Post(
	    	0,
	      	'',
	      	'',
	      	0,
	      	new Date
	      	);
	    if(this.MyPosts.length === 0){
	    	appareilObject.id=0;
	    }
	    else
	    {
	    	appareilObject.id = this.MyPosts[(this.MyPosts.length - 1)].id+1;
	    }
	    
	    appareilObject.title = title;
	    appareilObject.content = content;
	    this.MyPosts.push(appareilObject);
	    this.emitAppareilSubject();

	}
	deletePost(n:number){
		const ele :Post[] = this.MyPosts.splice(n,1);
		this.MyPosts=this.MyPosts.filter(value => value != ele[0]);
		console.log("affichage: "+this.MyPosts);
		/*console.log("Maintenant; cet element qui a été retiré de la liste de l\'id "+this.MyPosts[n].id+ " est de titre : "+ this.MyPosts[n].title);*/
		this.emitAppareilSubject();
	}

	DontLove(n:number)
	{
		this.MyPosts[n].loveIts -=1;
		this.emitAppareilSubject();
	}

	Love(n:number)
	{
		this.MyPosts[n].loveIts +=1;
		this.emitAppareilSubject();
	}

	getAppareilById(id: number) {
	    const MyPost = this.MyPosts.find(
	      (s) => {
	        return s.id === id;
	      }
	    );
	    return MyPost;
	}

	getPostsNbre() {
	    return this.MyPosts.length;
	    this.emitAppareilSubject();
	}

}