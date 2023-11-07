import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function aboutMe(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("about-me");

}

export function skill(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("skill");

}

export function contact(args){
  const button = args.object;
  const page = button.page;
  page.frame.navigate("contact");

}