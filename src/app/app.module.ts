import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarSectionComponent } from './components/sidebar/sidebar-section/sidebar-section.component';
import { SidebarSubsectionIComponent } from './components/sidebar/sidebar-subsection/sidebar-subsection.component';
import { SearchCourseItemsPipe } from './pipes/search-course-items.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LectionComponent } from './components/lection/lection.component';
import { TextComponent } from './components/lection/lection-content/text/text.component';
import { ImageComponent } from './components/lection/lection-content/image/image.component';
import { CodeExampleComponent } from './components/lection/lection-content/code-example/code-example.component';
import { ClipboardModule } from 'ngx-clipboard';
import { MarkdownModule } from 'ngx-markdown';
import { TextExampleComponent } from './components/lection/lection-content/text-example/text-example.component';
import { VideoComponent } from './components/lection/lection-content/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { QuizComponent } from './components/lection/lection-content/quiz/quiz.component';
import { CodeAssertationComponent } from './components/lection/lection-content/code-assertation/code-assertation.component';
import { CodeExecutorComponent } from './components/lection/lection-content/code-executor/code-executor.component';
import { LectionToolsComponent } from './components/lection/lection-tools/lection-tools.component';
import { OverviewComponent } from './components/lection/lection-tools/overview/overview.component';
import { NotesComponent } from './components/lection/lection-tools/notes/notes.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './components/toolbar/notifications/notifications.component';
import { PomodoroComponent } from './components/toolbar/pomodoro/pomodoro.component';
import { ToolbarNotesComponent } from './components/toolbar/notes/notes.component';
import { CoursePageComponent } from './pages/course-page/course-page.component';
import { CourseContentHeaderComponent } from './components/lection/lection-content/course-content-header/course-content-header.component';
import { FocusDirective } from './directives/focus.directive';
import { NoteComponent } from './components/lection/lection-tools/notes/note/note.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdditionalDataComponent } from './components/lection/lection-tools/additional-data/additional-data.component';
import { DiscussionComponent } from './components/lection/lection-tools/discussion/discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarSectionComponent,
    SidebarSubsectionIComponent,
    SearchCourseItemsPipe,
    LectionComponent,
    TextComponent,
    ImageComponent,
    CodeExampleComponent,
    TextExampleComponent,
    VideoComponent,
    QuizComponent,
    CodeAssertationComponent,
    CodeExecutorComponent,
    LectionToolsComponent,
    OverviewComponent,
    NotesComponent,
    ToolbarComponent,
    NotificationsComponent,
    PomodoroComponent,
    ToolbarNotesComponent,
    CoursePageComponent,
    CourseContentHeaderComponent,
    FocusDirective,
    NoteComponent,
    FooterComponent,
    AdditionalDataComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    MarkdownModule.forRoot(),
    YouTubePlayerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
