import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {

  transform(episode_id: string): string {
    if (!episode_id){
      return 'assets/img/covers/noimage.png'
    }

    if (episode_id){
      return './assets/imgs/covers/episode_'+episode_id+'.jpg';
    } else {
      return 'assets/img/covers/noimage.png'
    }
  }

}
