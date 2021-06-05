import { ResourceType } from '@/store/modules/resources/domain/resource-type.enum';

export default interface Resource {
  type: ResourceType;
  content: string;
  index: number;
}
