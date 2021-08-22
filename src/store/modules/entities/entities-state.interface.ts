import Entity from '@/store/modules/entities/domain/entity-schema.interface';

export default interface EntitiesState {
  entities: Array<Entity>;
}
