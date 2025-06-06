import {Uniform1i, Uniform1f, Uniform2f, UniformMatrix4f} from '../uniform_binding';
import {extend} from '../../util/util';

import type {Context} from '../../gl/context';
import type {Painter} from '../painter';
import type {UniformValues, UniformLocations} from '../uniform_binding';
import {type mat4} from 'gl-matrix';

export type SymbolIconUniformsType = {
    'u_is_size_zoom_constant': Uniform1i;
    'u_is_size_feature_constant': Uniform1i;
    'u_size_t': Uniform1f;
    'u_size': Uniform1f;
    'u_camera_to_center_distance': Uniform1f;
    'u_pitch': Uniform1f;
    'u_rotate_symbol': Uniform1i;
    'u_aspect_ratio': Uniform1f;
    'u_fade_change': Uniform1f;
    'u_label_plane_matrix': UniformMatrix4f;
    'u_coord_matrix': UniformMatrix4f;
    'u_is_text': Uniform1i;
    'u_pitch_with_map': Uniform1i;
    'u_is_along_line': Uniform1i;
    'u_is_variable_anchor': Uniform1i;
    'u_texsize': Uniform2f;
    'u_texture': Uniform1i;
    'u_translation': Uniform2f;
    'u_pitched_scale': Uniform1f;
};

export type SymbolSDFUniformsType = {
    'u_is_size_zoom_constant': Uniform1i;
    'u_is_size_feature_constant': Uniform1i;
    'u_size_t': Uniform1f;
    'u_size': Uniform1f;
    'u_camera_to_center_distance': Uniform1f;
    'u_pitch': Uniform1f;
    'u_rotate_symbol': Uniform1i;
    'u_aspect_ratio': Uniform1f;
    'u_fade_change': Uniform1f;
    'u_label_plane_matrix': UniformMatrix4f;
    'u_coord_matrix': UniformMatrix4f;
    'u_is_text': Uniform1i;
    'u_pitch_with_map': Uniform1i;
    'u_is_along_line': Uniform1i;
    'u_is_variable_anchor': Uniform1i;
    'u_texsize': Uniform2f;
    'u_texture': Uniform1i;
    'u_gamma_scale': Uniform1f;
    'u_device_pixel_ratio': Uniform1f;
    'u_is_halo': Uniform1i;
    'u_translation': Uniform2f;
    'u_pitched_scale': Uniform1f;
};

export type symbolTextAndIconUniformsType = {
    'u_is_size_zoom_constant': Uniform1i;
    'u_is_size_feature_constant': Uniform1i;
    'u_size_t': Uniform1f;
    'u_size': Uniform1f;
    'u_camera_to_center_distance': Uniform1f;
    'u_pitch': Uniform1f;
    'u_rotate_symbol': Uniform1i;
    'u_aspect_ratio': Uniform1f;
    'u_fade_change': Uniform1f;
    'u_label_plane_matrix': UniformMatrix4f;
    'u_coord_matrix': UniformMatrix4f;
    'u_is_text': Uniform1i;
    'u_pitch_with_map': Uniform1i;
    'u_is_along_line': Uniform1i;
    'u_is_variable_anchor': Uniform1i;
    'u_texsize': Uniform2f;
    'u_texsize_icon': Uniform2f;
    'u_texture': Uniform1i;
    'u_texture_icon': Uniform1i;
    'u_gamma_scale': Uniform1f;
    'u_device_pixel_ratio': Uniform1f;
    'u_is_halo': Uniform1i;
    'u_translation': Uniform2f;
    'u_pitched_scale': Uniform1f;
};

const symbolIconUniforms = (context: Context, locations: UniformLocations): SymbolIconUniformsType => ({
    'u_is_size_zoom_constant': new Uniform1i(context, locations.u_is_size_zoom_constant),
    'u_is_size_feature_constant': new Uniform1i(context, locations.u_is_size_feature_constant),
    'u_size_t': new Uniform1f(context, locations.u_size_t),
    'u_size': new Uniform1f(context, locations.u_size),
    'u_camera_to_center_distance': new Uniform1f(context, locations.u_camera_to_center_distance),
    'u_pitch': new Uniform1f(context, locations.u_pitch),
    'u_rotate_symbol': new Uniform1i(context, locations.u_rotate_symbol),
    'u_aspect_ratio': new Uniform1f(context, locations.u_aspect_ratio),
    'u_fade_change': new Uniform1f(context, locations.u_fade_change),
    'u_label_plane_matrix': new UniformMatrix4f(context, locations.u_label_plane_matrix),
    'u_coord_matrix': new UniformMatrix4f(context, locations.u_coord_matrix),
    'u_is_text': new Uniform1i(context, locations.u_is_text),
    'u_pitch_with_map': new Uniform1i(context, locations.u_pitch_with_map),
    'u_is_along_line': new Uniform1i(context, locations.u_is_along_line),
    'u_is_variable_anchor': new Uniform1i(context, locations.u_is_variable_anchor),
    'u_texsize': new Uniform2f(context, locations.u_texsize),
    'u_texture': new Uniform1i(context, locations.u_texture),
    'u_translation': new Uniform2f(context, locations.u_translation),
    'u_pitched_scale': new Uniform1f(context, locations.u_pitched_scale),
});

const symbolSDFUniforms = (context: Context, locations: UniformLocations): SymbolSDFUniformsType => ({
    'u_is_size_zoom_constant': new Uniform1i(context, locations.u_is_size_zoom_constant),
    'u_is_size_feature_constant': new Uniform1i(context, locations.u_is_size_feature_constant),
    'u_size_t': new Uniform1f(context, locations.u_size_t),
    'u_size': new Uniform1f(context, locations.u_size),
    'u_camera_to_center_distance': new Uniform1f(context, locations.u_camera_to_center_distance),
    'u_pitch': new Uniform1f(context, locations.u_pitch),
    'u_rotate_symbol': new Uniform1i(context, locations.u_rotate_symbol),
    'u_aspect_ratio': new Uniform1f(context, locations.u_aspect_ratio),
    'u_fade_change': new Uniform1f(context, locations.u_fade_change),
    'u_label_plane_matrix': new UniformMatrix4f(context, locations.u_label_plane_matrix),
    'u_coord_matrix': new UniformMatrix4f(context, locations.u_coord_matrix),
    'u_is_text': new Uniform1i(context, locations.u_is_text),
    'u_pitch_with_map': new Uniform1i(context, locations.u_pitch_with_map),
    'u_is_along_line': new Uniform1i(context, locations.u_is_along_line),
    'u_is_variable_anchor': new Uniform1i(context, locations.u_is_variable_anchor),
    'u_texsize': new Uniform2f(context, locations.u_texsize),
    'u_texture': new Uniform1i(context, locations.u_texture),
    'u_gamma_scale': new Uniform1f(context, locations.u_gamma_scale),
    'u_device_pixel_ratio': new Uniform1f(context, locations.u_device_pixel_ratio),
    'u_is_halo': new Uniform1i(context, locations.u_is_halo),
    'u_translation': new Uniform2f(context, locations.u_translation),
    'u_pitched_scale': new Uniform1f(context, locations.u_pitched_scale),
});

const symbolTextAndIconUniforms = (context: Context, locations: UniformLocations): symbolTextAndIconUniformsType => ({
    'u_is_size_zoom_constant': new Uniform1i(context, locations.u_is_size_zoom_constant),
    'u_is_size_feature_constant': new Uniform1i(context, locations.u_is_size_feature_constant),
    'u_size_t': new Uniform1f(context, locations.u_size_t),
    'u_size': new Uniform1f(context, locations.u_size),
    'u_camera_to_center_distance': new Uniform1f(context, locations.u_camera_to_center_distance),
    'u_pitch': new Uniform1f(context, locations.u_pitch),
    'u_rotate_symbol': new Uniform1i(context, locations.u_rotate_symbol),
    'u_aspect_ratio': new Uniform1f(context, locations.u_aspect_ratio),
    'u_fade_change': new Uniform1f(context, locations.u_fade_change),
    'u_label_plane_matrix': new UniformMatrix4f(context, locations.u_label_plane_matrix),
    'u_coord_matrix': new UniformMatrix4f(context, locations.u_coord_matrix),
    'u_is_text': new Uniform1i(context, locations.u_is_text),
    'u_pitch_with_map': new Uniform1i(context, locations.u_pitch_with_map),
    'u_is_along_line': new Uniform1i(context, locations.u_is_along_line),
    'u_is_variable_anchor': new Uniform1i(context, locations.u_is_variable_anchor),
    'u_texsize': new Uniform2f(context, locations.u_texsize),
    'u_texsize_icon': new Uniform2f(context, locations.u_texsize_icon),
    'u_texture': new Uniform1i(context, locations.u_texture),
    'u_texture_icon': new Uniform1i(context, locations.u_texture_icon),
    'u_gamma_scale': new Uniform1f(context, locations.u_gamma_scale),
    'u_device_pixel_ratio': new Uniform1f(context, locations.u_device_pixel_ratio),
    'u_is_halo': new Uniform1i(context, locations.u_is_halo),
    'u_translation': new Uniform2f(context, locations.u_translation),
    'u_pitched_scale': new Uniform1f(context, locations.u_pitched_scale),
});

const symbolIconUniformValues = (
    functionType: string,
    size: {
        uSizeT: number;
        uSize: number;
    },
    rotateInShader: boolean,
    pitchWithMap: boolean,
    isAlongLine: boolean,
    isVariableAnchor: boolean,
    painter: Painter,
    labelPlaneMatrix: mat4,
    glCoordMatrix: mat4,
    translation: [number, number],
    isText: boolean,
    texSize: [number, number],
    pitchedScale: number
): UniformValues<SymbolIconUniformsType> => {
    const transform = painter.transform;

    return {
        'u_is_size_zoom_constant': +(functionType === 'constant' || functionType === 'source'),
        'u_is_size_feature_constant': +(functionType === 'constant' || functionType === 'camera'),
        'u_size_t': size ? size.uSizeT : 0,
        'u_size': size ? size.uSize : 0,
        'u_camera_to_center_distance': transform.cameraToCenterDistance,
        'u_pitch': transform.pitch / 360 * 2 * Math.PI,
        'u_rotate_symbol': +rotateInShader,
        'u_aspect_ratio': transform.width / transform.height,
        'u_fade_change': painter.options.fadeDuration ? painter.symbolFadeChange : 1,
        'u_label_plane_matrix': labelPlaneMatrix,
        'u_coord_matrix': glCoordMatrix,
        'u_is_text': +isText,
        'u_pitch_with_map': +pitchWithMap,
        'u_is_along_line': isAlongLine,
        'u_is_variable_anchor': isVariableAnchor,
        'u_texsize': texSize,
        'u_texture': 0,
        'u_translation': translation,
        'u_pitched_scale': pitchedScale
    };
};

const symbolSDFUniformValues = (
    functionType: string,
    size: {
        uSizeT: number;
        uSize: number;
    },
    rotateInShader: boolean,
    pitchWithMap: boolean,
    isAlongLine: boolean,
    isVariableAnchor: boolean,
    painter: Painter,
    labelPlaneMatrix: mat4,
    glCoordMatrix: mat4,
    translation: [number, number],
    isText: boolean,
    texSize: [number, number],
    isHalo: boolean,
    pitchedScale: number
): UniformValues<SymbolSDFUniformsType> => {
    const transform = painter.transform;

    return extend(symbolIconUniformValues(functionType, size,
        rotateInShader, pitchWithMap, isAlongLine, isVariableAnchor, painter, labelPlaneMatrix,
        glCoordMatrix, translation, isText, texSize, pitchedScale), {
        'u_gamma_scale': (pitchWithMap ? Math.cos(transform.pitch * Math.PI / 180.0) * transform.cameraToCenterDistance : 1),
        'u_device_pixel_ratio': painter.pixelRatio,
        'u_is_halo': +isHalo
    });
};

const symbolTextAndIconUniformValues = (
    functionType: string,
    size: {
        uSizeT: number;
        uSize: number;
    },
    rotateInShader: boolean,
    pitchWithMap: boolean,
    isAlongLine: boolean,
    isVariableAnchor: boolean,
    painter: Painter,
    labelPlaneMatrix: mat4,
    glCoordMatrix: mat4,
    translation: [number, number],
    texSizeSDF: [number, number],
    texSizeIcon: [number, number],
    pitchedScale: number
): UniformValues<SymbolIconUniformsType> => {
    return extend(symbolSDFUniformValues(functionType, size,
        rotateInShader, pitchWithMap, isAlongLine, isVariableAnchor, painter, labelPlaneMatrix,
        glCoordMatrix, translation, true, texSizeSDF, true, pitchedScale), {
        'u_texsize_icon': texSizeIcon,
        'u_texture_icon': 1
    });
};

export {symbolIconUniforms, symbolSDFUniforms, symbolIconUniformValues, symbolSDFUniformValues, symbolTextAndIconUniformValues, symbolTextAndIconUniforms};
