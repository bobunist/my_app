import { Pipe, PipeTransform } from '@angular/core';
import { ICourseSubsection } from '../models/course-subsection';

@Pipe({
  name: 'searchCourseItems'
})
export class SearchCourseItemsPipe implements PipeTransform {

  transform(items: ICourseSubsection[], search: string): ICourseSubsection[]  {
    if (search.length === 0) return []
    
    return items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }

}
