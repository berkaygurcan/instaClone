export type PostDataType = {
  id: number;
  name: string;
  profilePicUrl: string;
  content: string[];
  contentType: 'img' | 'video';
  likeCount: number;
};

type ExploreItem = {
  id: number;
  name: string;
  url: string;
  contentType: 'img' | 'video';
};

type ExploreSection = {
  id: number;
  items: ExploreItem[];
};

export type MockExploreData = ExploreSection[][];

export const mockPostData: PostDataType[] = [
  {
    id: 1,
    name: 'klarie',
    profilePicUrl:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: [
      'https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/16817504/pexels-photo-16817504/free-photo-of-deniz-siyah-ve-beyaz-kadin-ayakta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    contentType: 'img',
    likeCount: 10,
  },
  {
    id: 2,
    name: 'berkay',
    profilePicUrl:
      'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: [
      'https://images.pexels.com/photos/19578087/pexels-photo-19578087/free-photo-of-peyzaj-daglar-gol-yansima.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/19572849/pexels-photo-19572849/free-photo-of-evcil-hayvan-oturmak-ust-yuksek.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    contentType: 'img',
    likeCount: 20,
  },
  {
    id: 3,
    name: 'sewa',
    profilePicUrl:
      'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: [
      'https://excite.videvo.net/videvo_files/video/premium/partners0689/large_watermarked/2808608_preview.mp4',
    ],
    contentType: 'video',
    likeCount: 50,
  },
];

export const mockExploreData: ExploreSection[] = [
  {
    id: 1,
    items: [
      {
        id: 1,
        name: 'Foggy Green Trees in the Forest',
        url: 'https://images.pexels.com/photos/12315546/pexels-photo-12315546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 2,
        name: 'A Lone Tree in a Field on a Foggy Day',
        url: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        contentType: 'img',
      },
      {
        id: 3,
        name: 'Woman in Black Gown Standing in Shallow Water',
        url: 'https://images.pexels.com/photos/19121815/pexels-photo-19121815/free-photo-of-woman-in-black-gown-standing-in-shallow-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 4,
        name: 'Woman Sitting Alone in an Auditorium Seat',
        url: 'https://images.pexels.com/photos/19140226/pexels-photo-19140226/free-photo-of-woman-sitting-alone-in-an-auditorium-seat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 5,
        name: 'A Futuristic Robot Slowly Morphs Under Laser Beams',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-a-futuristic-robot-slowly-morphs-under-laser-beams-and-ethereal-51519-large.mp4',
        contentType: 'video',
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 6,
        name: 'model in black top and jacket',
        url: 'https://images.pexels.com/photos/18866331/pexels-photo-18866331/free-photo-of-model-in-black-top-and-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 7,
        name: 'brunette woman with sunglasses in hand',
        url: 'https://images.pexels.com/photos/19452752/pexels-photo-19452752/free-photo-of-brunette-woman-with-sunglasses-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 8,
        name: 'close up photography of a woman near wall',
        url: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 9,
        name: 'smiling woman wearing black sweater',
        url: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        contentType: 'img',
      },
      {
        id: 10,
        name: 'a futuristic robot slowly morphs under laser beams and ethereal',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-a-young-tattooed-woman-sits-beside-a-window-with-a-51515-large.mp4',
        contentType: 'video',
      },
    ],
  },
];
