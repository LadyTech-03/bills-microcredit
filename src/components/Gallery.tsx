import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface GalleryProps {
  images?: string[];
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const Gallery = ({
  images = [],
  title = "News & Gallery",
  subtitle = "Moments that define our journey",
  showCTA = true,
  ctaText = "See More",
  ctaLink = "/gallery",
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default images if none provided
  const defaultImages = [
    "https://kobbykyeinews.com/wp-content/uploads/2025/04/IMG_8568-800x500.jpeg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myjoyonline.com%2Fweve-disbursed-over-gh%25E2%2582%25B57-5bn-in-loans-to-ghanaians-so-far-bills-founder%2F&psig=AOvVaw2ke9AIQoxNY9GwRBOvv0_A&ust=1764397073426000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjnnLiZlJEDFQAAAAAdAAAAABAX",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502090225_1330895479036715_3197497984422392768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_Ch-5T3yy2lPiHfkOqc5lVy0cf7aGZklXLRx_toZmSYgqAidqW151npju6m2n0TAzOOMz5vGpLFF2EELiQa1j&_nc_ohc=DI1pOfrtIGoQ7kNvwF70R1H&_nc_oc=AdlV-FPdK5WXPnLikM0Gos_dPocIc2ZMghOccJ8ZsgooPp62Bxzxr8G10psUEgQg2S4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=XXDH6eFciAuLcX0ShXnvHQ&oh=00_AfiIrFxuly7A7m2iC1apj1xTRfG_vHkqr__XxcVf1Xxk7w&oe=692F2760",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503390696_1330895502370046_2936668119651678264_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGu4u2T0UnCeUGdfXjx1iJkON_hH5g-Eac43-EfmD4Rp_y_gxQrsX2DGykVkr8YnThMdTVJBqwjbbkFkIKjiH3h&_nc_ohc=4lwMNGYx2mwQ7kNvwFwnZw1&_nc_oc=AdkSbVk0ZQijXcbg_Hd1BI0iSEa6fa4gsOGJEhlUnituy5SM72JBH5VCmVybXQPoqec&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=F2IJlzltWVqNhtJsdBD_kA&oh=00_AfhYRKM0PtMyMjY9g0Zt7fjrms_kY8oJg2vGrg1rOUEznQ&oe=692F1708",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502154114_1330895279036735_3846090179712170493_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHedkwKvLtUsLOwnst9cT5AkH3M8pejBemQfczyl6MF6dMBVTPLG-cx-ZHLcuYts_izvRuRSfsfkmxsMG1mg8T1&_nc_ohc=NWZMI8Y9cpAQ7kNvwF9tlSP&_nc_oc=Adm9-weQr_Utg0cjbkBoTDnOg5OlGR7kHsfeEUIGuisCOnNc7FSnFp1vWOEnrUGqTHs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=rpanc9EK_uJuOdGAt0woVw&oh=00_AfgbohyPBwhdMp-lntvUNjE635HVJOz--jMFepNhNjJfCg&oe=692F201F",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503109019_1330895232370073_6813961823540001301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_S9FKQHFtMvX3u1p3XsbMD46ogYURtdQPjqiBhRG11LgwHQcYtEkFil4cedqXE228qOsz-s2fhzVEA3qy9O8L&_nc_ohc=6FXPF7K7_PwQ7kNvwGtL2XU&_nc_oc=AdkwgWde4FaMc6yNOZ7fFxMfzT76B5Tfa1gkSdswqDVohF1tqkSjQzXMpl0zuIRyDz0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=gXfz467tDLVAaURxH6WKMg&oh=00_Afj3jYn5j11GDo5ffYcIueqxcQTEXodK1wmKyAuLp-0evQ&oe=692F2061",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503378232_1330895162370080_538572989946555177_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEe9XOjwi_nTN9V8P6KWvFXHTegxbu5bhodN6DFu7luGskqHB-JqhBSQMLO8Q-FsTPg6hF75jLgh-T_VnEyZyka&_nc_ohc=KXTOtrlWuQMQ7kNvwHKLXRW&_nc_oc=AdmcX6RzSR_0AGJVeqXCYKG64tBiHc1ochoaEa9uxGGaf6C1NuS4hCNCteFFZ-aCur8&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=dxVgSLUswH35TI58SJF3_g&oh=00_AfgykLrNq9KPjpwG-wFDmFNKt1kUn66aNIvjtCdOYScQCQ&oe=692F2630",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503397905_1330895582370038_2181265699449835299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhg2vNQdtkWAiCfEX-PC5CjL4Miz3FUfiMvgyLPcVR-GB-kP47zu6eE7fWO_pabMYPC6As0j5i1bcfHqQVNYmj&_nc_ohc=lFJiejSIOgEQ7kNvwEjpDpw&_nc_oc=AdlO2rFeoEyK2V4K8X00dPOv5ZoSCXPiDdCtsN46IJnc3aoBelnNdCxKL05jzghHXoI&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=iVaHWT9iK4ClEDzst3tbFA&oh=00_AfgIeCbdJmrm69IMnt0BSx9ReA9u9XbstRhVyxyO6uctVw&oe=692F03ED",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/502842449_1330895575703372_3884241700409610388_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGugjo939rTC7eCFmFmdpcYqZPqhu_FaZepk-qG78Vpl0Kp0_xYDhojrqE1ZHz2R9bcLIHzIO1z3EAOLfFF7HHM&_nc_ohc=42WvFfCkt14Q7kNvwGZcPBS&_nc_oc=Adm2EtMahxXm12z_BkDofl3TGk9_2-csEhKfVVeh36lfdjfDU4YxSQL7UQDrCp-XLMs&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=iP9Hy4CtagkBYF-43gAhcw&oh=00_Afj-D1uwPat2VoU75wgMEIhU67aigWRhtZRfUD3YaVy6YA&oe=692F072A",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502144719_1330895549036708_3813522526644488638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfxl662B0HnhZGzobRqlJUi5GqVsQTmxOLkapWxBObE9FRoYJesDCBhXjg9Hrrt-LCMMPBZobzOFRaPnjtALNN&_nc_ohc=zwjft2PUhVMQ7kNvwHDuMoB&_nc_oc=AdlypS5glucW4O3Rw78qHJ7ScEzp-3Ek15MaKbK_auVx_3HKOot91WPgDeunWUHZmm0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=K97N6sgPMmo1T0fgxndHgA&oh=00_AfjiVUtjvhRpi4sjLtc3ZYVlXs_FieXaKyylnXvUyipk2Q&oe=692F2F90",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502090225_1330895479036715_3197497984422392768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_Ch-5T3yy2lPiHfkOqc5lVy0cf7aGZklXLRx_toZmSYgqAidqW151npju6m2n0TAzOOMz5vGpLFF2EELiQa1j&_nc_ohc=DI1pOfrtIGoQ7kNvwF70R1H&_nc_oc=AdlV-FPdK5WXPnLikM0Gos_dPocIc2ZMghOccJ8ZsgooPp62Bxzxr8G10psUEgQg2S4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=XXDH6eFciAuLcX0ShXnvHQ&oh=00_AfiIrFxuly7A7m2iC1apj1xTRfG_vHkqr__XxcVf1Xxk7w&oe=692F2760",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://kobbykyeinews.com/wp-content/uploads/2025/04/IMG_8568-800x500.jpeg",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503390696_1330895502370046_2936668119651678264_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGu4u2T0UnCeUGdfXjx1iJkON_hH5g-Eac43-EfmD4Rp_y_gxQrsX2DGykVkr8YnThMdTVJBqwjbbkFkIKjiH3h&_nc_ohc=4lwMNGYx2mwQ7kNvwFwnZw1&_nc_oc=AdkSbVk0ZQijXcbg_Hd1BI0iSEa6fa4gsOGJEhlUnituy5SM72JBH5VCmVybXQPoqec&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=F2IJlzltWVqNhtJsdBD_kA&oh=00_AfhYRKM0PtMyMjY9g0Zt7fjrms_kY8oJg2vGrg1rOUEznQ&oe=692F1708",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503397905_1330895582370038_2181265699449835299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhg2vNQdtkWAiCfEX-PC5CjL4Miz3FUfiMvgyLPcVR-GB-kP47zu6eE7fWO_pabMYPC6As0j5i1bcfHqQVNYmj&_nc_ohc=lFJiejSIOgEQ7kNvwEjpDpw&_nc_oc=AdlO2rFeoEyK2V4K8X00dPOv5ZoSCXPiDdCtsN46IJnc3aoBelnNdCxKL05jzghHXoI&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=iVaHWT9iK4ClEDzst3tbFA&oh=00_AfgIeCbdJmrm69IMnt0BSx9ReA9u9XbstRhVyxyO6uctVw&oe=692F03ED",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502144719_1330895549036708_3813522526644488638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfxl662B0HnhZGzobRqlJUi5GqVsQTmxOLkapWxBObE9FRoYJesDCBhXjg9Hrrt-LCMMPBZobzOFRaPnjtALNN&_nc_ohc=zwjft2PUhVMQ7kNvwHDuMoB&_nc_oc=AdlypS5glucW4O3Rw78qHJ7ScEzp-3Ek15MaKbK_auVx_3HKOot91WPgDeunWUHZmm0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=K97N6sgPMmo1T0fgxndHgA&oh=00_AfjiVUtjvhRpi4sjLtc3ZYVlXs_FieXaKyylnXvUyipk2Q&oe=692F2F90",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503109019_1330895232370073_6813961823540001301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_S9FKQHFtMvX3u1p3XsbMD46ogYURtdQPjqiBhRG11LgwHQcYtEkFil4cedqXE228qOsz-s2fhzVEA3qy9O8L&_nc_ohc=6FXPF7K7_PwQ7kNvwGtL2XU&_nc_oc=AdkwgWde4FaMc6yNOZ7fFxMfzT76B5Tfa1gkSdswqDVohF1tqkSjQzXMpl0zuIRyDz0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=gXfz467tDLVAaURxH6WKMg&oh=00_Afj3jYn5j11GDo5ffYcIueqxcQTEXodK1wmKyAuLp-0evQ&oe=692F2061",
    "https://kobbykyeinews.com/wp-content/uploads/2025/04/IMG_8568-800x500.jpeg",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.myjoyonline.com%2Fweve-disbursed-over-gh%25E2%2582%25B57-5bn-in-loans-to-ghanaians-so-far-bills-founder%2F&psig=AOvVaw2ke9AIQoxNY9GwRBOvv0_A&ust=1764397073426000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNjnnLiZlJEDFQAAAAAdAAAAABAX",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502090225_1330895479036715_3197497984422392768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_Ch-5T3yy2lPiHfkOqc5lVy0cf7aGZklXLRx_toZmSYgqAidqW151npju6m2n0TAzOOMz5vGpLFF2EELiQa1j&_nc_ohc=DI1pOfrtIGoQ7kNvwF70R1H&_nc_oc=AdlV-FPdK5WXPnLikM0Gos_dPocIc2ZMghOccJ8ZsgooPp62Bxzxr8G10psUEgQg2S4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=XXDH6eFciAuLcX0ShXnvHQ&oh=00_AfiIrFxuly7A7m2iC1apj1xTRfG_vHkqr__XxcVf1Xxk7w&oe=692F2760",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503390696_1330895502370046_2936668119651678264_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGu4u2T0UnCeUGdfXjx1iJkON_hH5g-Eac43-EfmD4Rp_y_gxQrsX2DGykVkr8YnThMdTVJBqwjbbkFkIKjiH3h&_nc_ohc=4lwMNGYx2mwQ7kNvwFwnZw1&_nc_oc=AdkSbVk0ZQijXcbg_Hd1BI0iSEa6fa4gsOGJEhlUnituy5SM72JBH5VCmVybXQPoqec&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=F2IJlzltWVqNhtJsdBD_kA&oh=00_AfhYRKM0PtMyMjY9g0Zt7fjrms_kY8oJg2vGrg1rOUEznQ&oe=692F1708",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502154114_1330895279036735_3846090179712170493_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHedkwKvLtUsLOwnst9cT5AkH3M8pejBemQfczyl6MF6dMBVTPLG-cx-ZHLcuYts_izvRuRSfsfkmxsMG1mg8T1&_nc_ohc=NWZMI8Y9cpAQ7kNvwF9tlSP&_nc_oc=Adm9-weQr_Utg0cjbkBoTDnOg5OlGR7kHsfeEUIGuisCOnNc7FSnFp1vWOEnrUGqTHs&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=rpanc9EK_uJuOdGAt0woVw&oh=00_AfgbohyPBwhdMp-lntvUNjE635HVJOz--jMFepNhNjJfCg&oe=692F201F",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503109019_1330895232370073_6813961823540001301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_S9FKQHFtMvX3u1p3XsbMD46ogYURtdQPjqiBhRG11LgwHQcYtEkFil4cedqXE228qOsz-s2fhzVEA3qy9O8L&_nc_ohc=6FXPF7K7_PwQ7kNvwGtL2XU&_nc_oc=AdkwgWde4FaMc6yNOZ7fFxMfzT76B5Tfa1gkSdswqDVohF1tqkSjQzXMpl0zuIRyDz0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=gXfz467tDLVAaURxH6WKMg&oh=00_Afj3jYn5j11GDo5ffYcIueqxcQTEXodK1wmKyAuLp-0evQ&oe=692F2061",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503378232_1330895162370080_538572989946555177_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEe9XOjwi_nTN9V8P6KWvFXHTegxbu5bhodN6DFu7luGskqHB-JqhBSQMLO8Q-FsTPg6hF75jLgh-T_VnEyZyka&_nc_ohc=KXTOtrlWuQMQ7kNvwHKLXRW&_nc_oc=AdmcX6RzSR_0AGJVeqXCYKG64tBiHc1ochoaEa9uxGGaf6C1NuS4hCNCteFFZ-aCur8&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=dxVgSLUswH35TI58SJF3_g&oh=00_AfgykLrNq9KPjpwG-wFDmFNKt1kUn66aNIvjtCdOYScQCQ&oe=692F2630",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503397905_1330895582370038_2181265699449835299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhg2vNQdtkWAiCfEX-PC5CjL4Miz3FUfiMvgyLPcVR-GB-kP47zu6eE7fWO_pabMYPC6As0j5i1bcfHqQVNYmj&_nc_ohc=lFJiejSIOgEQ7kNvwEjpDpw&_nc_oc=AdlO2rFeoEyK2V4K8X00dPOv5ZoSCXPiDdCtsN46IJnc3aoBelnNdCxKL05jzghHXoI&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=iVaHWT9iK4ClEDzst3tbFA&oh=00_AfgIeCbdJmrm69IMnt0BSx9ReA9u9XbstRhVyxyO6uctVw&oe=692F03ED",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/502842449_1330895575703372_3884241700409610388_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGugjo939rTC7eCFmFmdpcYqZPqhu_FaZepk-qG78Vpl0Kp0_xYDhojrqE1ZHz2R9bcLIHzIO1z3EAOLfFF7HHM&_nc_ohc=42WvFfCkt14Q7kNvwGZcPBS&_nc_oc=Adm2EtMahxXm12z_BkDofl3TGk9_2-csEhKfVVeh36lfdjfDU4YxSQL7UQDrCp-XLMs&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=iP9Hy4CtagkBYF-43gAhcw&oh=00_Afj-D1uwPat2VoU75wgMEIhU67aigWRhtZRfUD3YaVy6YA&oe=692F072A",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502144719_1330895549036708_3813522526644488638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfxl662B0HnhZGzobRqlJUi5GqVsQTmxOLkapWxBObE9FRoYJesDCBhXjg9Hrrt-LCMMPBZobzOFRaPnjtALNN&_nc_ohc=zwjft2PUhVMQ7kNvwHDuMoB&_nc_oc=AdlypS5glucW4O3Rw78qHJ7ScEzp-3Ek15MaKbK_auVx_3HKOot91WPgDeunWUHZmm0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=K97N6sgPMmo1T0fgxndHgA&oh=00_AfjiVUtjvhRpi4sjLtc3ZYVlXs_FieXaKyylnXvUyipk2Q&oe=692F2F90",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502090225_1330895479036715_3197497984422392768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF_Ch-5T3yy2lPiHfkOqc5lVy0cf7aGZklXLRx_toZmSYgqAidqW151npju6m2n0TAzOOMz5vGpLFF2EELiQa1j&_nc_ohc=DI1pOfrtIGoQ7kNvwF70R1H&_nc_oc=AdlV-FPdK5WXPnLikM0Gos_dPocIc2ZMghOccJ8ZsgooPp62Bxzxr8G10psUEgQg2S4&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=XXDH6eFciAuLcX0ShXnvHQ&oh=00_AfiIrFxuly7A7m2iC1apj1xTRfG_vHkqr__XxcVf1Xxk7w&oe=692F2760",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://kobbykyeinews.com/wp-content/uploads/2025/04/IMG_8568-800x500.jpeg",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503390696_1330895502370046_2936668119651678264_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGu4u2T0UnCeUGdfXjx1iJkON_hH5g-Eac43-EfmD4Rp_y_gxQrsX2DGykVkr8YnThMdTVJBqwjbbkFkIKjiH3h&_nc_ohc=4lwMNGYx2mwQ7kNvwFwnZw1&_nc_oc=AdkSbVk0ZQijXcbg_Hd1BI0iSEa6fa4gsOGJEhlUnituy5SM72JBH5VCmVybXQPoqec&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=F2IJlzltWVqNhtJsdBD_kA&oh=00_AfhYRKM0PtMyMjY9g0Zt7fjrms_kY8oJg2vGrg1rOUEznQ&oe=692F1708",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502910304_1330895545703375_5453714196334901805_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTJa1GPIAr66QdqpCC366s0fk1NbtGMx3R-TU1u0YzHZI_P6eYh0Kr9MsGJ-z9VBEF-WBUPZnvekBgxuXrlXKW&_nc_ohc=1gfH6V8sF84Q7kNvwGGuSNi&_nc_oc=Adk5mE9L03rEf5x927wfa6EBFY5e0paqu-lMLshFQ-27sI164tjFxLzFjtMa2krVwhM&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=mg83LJL3WobNJdq0qTOSQQ&oh=00_AfglTI4h6YYlmKk5IcQ2FxJJhUREAdXGVY0VEUDHR3igvQ&oe=692F1C73",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/503397905_1330895582370038_2181265699449835299_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGhg2vNQdtkWAiCfEX-PC5CjL4Miz3FUfiMvgyLPcVR-GB-kP47zu6eE7fWO_pabMYPC6As0j5i1bcfHqQVNYmj&_nc_ohc=lFJiejSIOgEQ7kNvwEjpDpw&_nc_oc=AdlO2rFeoEyK2V4K8X00dPOv5ZoSCXPiDdCtsN46IJnc3aoBelnNdCxKL05jzghHXoI&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=iVaHWT9iK4ClEDzst3tbFA&oh=00_AfgIeCbdJmrm69IMnt0BSx9ReA9u9XbstRhVyxyO6uctVw&oe=692F03ED",
    "https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/502144719_1330895549036708_3813522526644488638_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfxl662B0HnhZGzobRqlJUi5GqVsQTmxOLkapWxBObE9FRoYJesDCBhXjg9Hrrt-LCMMPBZobzOFRaPnjtALNN&_nc_ohc=zwjft2PUhVMQ7kNvwHDuMoB&_nc_oc=AdlypS5glucW4O3Rw78qHJ7ScEzp-3Ek15MaKbK_auVx_3HKOot91WPgDeunWUHZmm0&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=K97N6sgPMmo1T0fgxndHgA&oh=00_AfjiVUtjvhRpi4sjLtc3ZYVlXs_FieXaKyylnXvUyipk2Q&oe=692F2F90",
    "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/503109019_1330895232370073_6813961823540001301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE_S9FKQHFtMvX3u1p3XsbMD46ogYURtdQPjqiBhRG11LgwHQcYtEkFil4cedqXE228qOsz-s2fhzVEA3qy9O8L&_nc_ohc=6FXPF7K7_PwQ7kNvwGtL2XU&_nc_oc=AdkwgWde4FaMc6yNOZ7fFxMfzT76B5Tfa1gkSdswqDVohF1tqkSjQzXMpl0zuIRyDz0&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=gXfz467tDLVAaURxH6WKMg&oh=00_Afj3jYn5j11GDo5ffYcIueqxcQTEXodK1wmKyAuLp-0evQ&oe=692F2061",
    




  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {title}
            </h2>
          </div>

          {/* 3D Marquee */}
          <div className="mx-auto rounded-2xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800/50">
            <ThreeDMarquee images={galleryImages} onImageClick={handleImageClick} />
          </div>

          {/* CTA Button */}
          {showCTA && (
            <div className="text-center mt-12">
              <a href={ctaLink}>
                <Button className="group text-lg hover:bg-topbar hover:text-topbar-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl bg-transparent p-0 border-0">
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          {/* Image */}
          <div className="relative w-full h-[80vh] bg-transparent flex items-center justify-center">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-md"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
