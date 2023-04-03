import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostsFormComponent } from './posts.form.component';
import { PostService } from '../services/post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'content',
    'author',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _postService: PostService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getPostList();
  }

  openAddEditPostForm() {
    const dialogRef = this._dialog.open(PostsFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPostList();
        }
      },
    });
  }

  getPostList() {
    this._postService.getPostList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePost(id: number) {
    this._postService.deletePost(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Post deleted!', 'done');
        this.getPostList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PostsFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPostList();
        }
      },
    });
  }
}
