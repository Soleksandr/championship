import { MikroORM, EntityRepository, SchemaGenerator } from 'mikro-orm';
import { Championship } from './entities/Championship';
import { User, IUserData } from './entities/User';

const { DB_NAME, DB_URL, DANGEROUSLY_CREATE_DATABASE_TABLES } = process.env;

class Db {
  async init() {
    this.orm = await MikroORM.init({
      type: 'postgresql',
      entities: [User, Championship],
      dbName: DB_NAME,
      clientUrl: DB_URL,
      baseDir: __dirname,
      autoFlush: true,
    });

    this.user = this.orm.em.getRepository(User);
    this.championship = this.orm.em.getRepository(Championship);

    this.generateTables(this.orm);

    return this.orm;
  }

  public user: EntityRepository<User> = null;
  public championship: EntityRepository<Championship> = null;

  public orm: MikroORM = null;

  private async generateTables(orm: MikroORM) {
    if (DANGEROUSLY_CREATE_DATABASE_TABLES) {
      const generator = new SchemaGenerator(this.orm.em.getDriver(), this.orm.getMetadata());
      const dump = generator.generate();

      await orm.em.getConnection().execute(dump);

      console.log('--- Database tables successfully generated ---');
    }
  }
}

export { User, IUserData, Championship };
export default new Db();
