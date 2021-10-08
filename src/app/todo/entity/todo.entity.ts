import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'todos'}) // este será o nome da tabela a ser criada no banco
export class TodoEntity {

  @PrimaryGeneratedColumn('uuid') // gera o id automaticamente em string
  id: string

  @Column()
  task:string

  @Column({name: 'is_done', type:'tinyint', width: 1})
  isDone: number

  @CreateDateColumn({name: 'created_at'})
  createdAt: string

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: string

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: string
}