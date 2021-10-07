import { withInfoPlist } from "@expo/config-plugins";
export const withImageCropPicker = (config) => {
    return withInfoPlist(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription =
            "Diese App benötigt Zugriff auf deine Fotos";
        config.modResults.NSCameraUsageDescription =
            "Diese App benötigt Zugriff auf deine Kamera";
        config.modResults.NSMicrophoneUsageDescription =
            "Diese App benötigt Zugriff auf dein Mikrofon";
        return config;
    });
};
export default withImageCropPicker;
//# sourceMappingURL=index.js.map