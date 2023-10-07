import { defaultClasses, getModelForClass, prop, modelOptions, Ref } from '@typegoose/typegoose';
import {
  HousingFeature,
  HousingOffer,
  HousingType,
  Geo,
} from '../../types/index.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface HousingOfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'housing-offer',
    timestamps: true,
  },
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class HousingOfferEntity
  extends defaultClasses.TimeStamps
  implements Omit<HousingOffer, 'user'> {
  @prop({ minlength: 10, maxlength: 100, required: true })
  public title: string;

  @prop({ minlength: 20, maxlength: 1024, trim: true, required: true })
  public description: string;

  @prop({ required: true })
  public city: string;

  @prop({ min: 1, max: 5, required: true })
  public rating: number;

  @prop({ required: true })
  public previewPhoto: string;

  @prop({ required: true })
  public photos: string[];

  @prop({ default: false, required: true })
  public isPremium: boolean;

  @prop({ default: false, required: true })
  public isFavorite: boolean;

  @prop({ required: true })
  public type: HousingType;

  @prop({ min: 1, max: 8, required: true })
  public rooms: number;

  @prop({ min: 1, max: 10, required: true })
  public guests: number;

  @prop({ min: 100, max: 100000, required: true })
  public cost: number;

  @prop({ required: true })
  public features: HousingFeature[];

  @prop({
    ref: UserEntity,
    required: true,
  })
  public userId: Ref<UserEntity>;

  @prop({ default: 0 })
  public commentsTotal: number;

  @prop({ required: true })
  public geo: Geo;
}

export const HousingOfferModel = getModelForClass(HousingOfferEntity);