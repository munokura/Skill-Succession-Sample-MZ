/*
 * --------------------------------------------------
 * MNKR_VariableCommand.js
 *   Ver.2.0.0
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_VariableCommand.js
 * @plugindesc 変数が使用できないイベントコマンドをプラグインコマンドで使用可能にします。
 * @author munokura
 * 
 * @help
 * 変数が使用できないイベントコマンドをプラグインコマンドで使用可能にします。
 * 
 * パーティ
 *   - アイテムの増減
 *   - 武器の増減
 *   - 防具の増減
 *   - メンバーの入れ替え　※完了
 * 
 * アクター
 *   - ステートの変更
 *   - スキルの増減　※完了
 *   - 装備の変更
 *   - 名前の変更
 *   - 職業の変更　※完了
 *   - 二つ名の変更
 *   - プロフィールの変更
 * 
 * キャラクター
 *   - アニメーションの表示
 *   - フキダシアイコンの表示　※完了
 * 
 * シーン制御
 *   - 名前入力の処理　※完了
 *
 * 
 * 利用規約:
 *   MITライセンスです。
 *   https://licenses.opensource.jp/MIT/MIT.html
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 *
 * @command changeMember
 * @text メンバーの入れ替え
 * @desc 変数の値のアクターIDをメンバーに「加え・外し」ます。
 * 
 * @arg selectMethod
 * @text 動作選択
 * @desc メンバーを「加える・外す」かを決めます。
 * @type boolean
 * @on 加える
 * @off 外す
 * @default true
 *
 * @arg variableIdActor
 * @text アクターIDを指定する変数ID
 * @desc 変数の値をアクターIDとして実行します。
 * @type variable
 * @default 0
 * 
 * @arg initializeActor
 * @text アクター初期化
 * @desc アクターを初期化します。
 * @type boolean
 * @on 初期化する
 * @off 初期化しない
 * @default false
 * 
 * @command removeActor
 * @text メンバーを外す
 * @desc 変数の値のアクターIDをメンバーから外します。
 *
 * @arg variableIdActor
 * @text アクターIDを指定する変数ID
 * @desc 変数の値をアクターIDとして実行します。
 * @type variable
 * @default 0
 * 
 * @arg initializeActor
 * @text アクター初期化
 * @desc アクターを初期化します。
 * @type boolean
 * @on 初期化する
 * @off 初期化しない
 * @default false
 * 
 * 
 * @command changeClass
 * @text 職業を変更する
 * @desc 変数の値のアクターIDの職業を変更します。
 *
 * @arg fixActorId
 * @text アクターID固定値
 * @desc アクターを指定します。
 * @type actor
 * @default 0
 *
 * @arg variableIdActor
 * @text アクター指定変数
 * @desc 変数の値をアクターIDとして実行します。これを指定するとアクターID固定値は無視されます。
 * @type variable
 * @default 0
 *
 * @arg fixClassId
 * @text 職業ID固定値
 * @desc 職業を指定します。
 * @type class
 * @default 0
 * 
 * @arg variableIdClass
 * @text 職業ID指定変数
 * @desc 変数の値を職業IDとして実行します。これを指定すると職業ID固定値は無視されます。
 * @type variable
 * @default 0
 * 
 * @arg holdLevel
 * @text レベルの保持
 * @desc レベルを保持します。
 * @type boolean
 * @on 保持する
 * @off 保持しない
 * @default false
 * 
 * 
 * @command nameInput
 * @text 名前入力の処理
 * @desc 変数の値のアクターIDの名前を入力します。
 *
 * @arg variableIdActor
 * @text アクターID指定変数
 * @desc 変数の値をアクターIDとして実行します。
 * @type variable
 * @default 1
 * 
 * @arg maxWord
 * @text 入力最大文字数
 * @desc 入力できる最大文字数を指定します。
 * @type number
 * @min 1
 * @default 8
 * 
 * 
 * @command requestBalloon
 * @text フキダシアイコンの表示
 * @desc フキダシアイコンを表示します。イベントコマンドで指定できない16番以降のフキダシ表示にも使用できます。
 *
 * @arg fixEventId
 * @text イベントID固定値
 * @desc 値が-1でプレイヤー、0で実行しているイベント、1以上はイベントIDになります。
 * @type number
 * @min -1
 * @default 0
 *
 * @arg variableIdEvent
 * @text イベントID変数
 * @desc 変数の値をイベントIDとします。これを指定するとイベントID固定値は無視されます。
 * @type variable
 * @default 0
 * 
 * @arg fixBalloonId
 * @text フキダシID固定値
 * @desc フキダシアイコンIDとして実行します。
 * @type number
 * @default 0
 * 
 * @arg variableIdBalloon
 * @text フキダシID変数
 * @desc 変数の値をフキダシアイコンIDとします。これを指定するとフキダシID固定値は無視されます。
 * @type variable
 * @default 0
 * 
 * @arg wait
 * @text 完了までウェイト
 * @desc 完了までウェイトします。
 * @type boolean
 * @on ウェイトする
 * @off ウェイトしない
 * @default false
 * 
 * @command changeSkill
 * @text スキルの増減
 * @desc スキルを「覚える・忘れる」します。
 *
 * @arg selectAction
 * @text 増減の選択
 * @desc スキルを「覚える・忘れる」か決めてください。
 * @type boolean
 * @on 覚える
 * @off 忘れる
 * @default true
 * 
 * @arg fixActorId
 * @text アクターID固定値
 * @desc アクターを指定します。
 * @type actor
 * @default 0
 *
 * @arg variableIdActor
 * @text アクター指定変数
 * @desc 変数の値をアクターIDとして実行します。これを指定するとアクターID固定値は無視されます。
 * @type variable
 * @default 0
 *
 * @arg fixSkillId
 * @text スキルID固定値
 * @desc スキルを指定します。
 * @type class
 * @default 0
 * 
 * @arg variableIdSkill
 * @text スキルID指定変数
 * @desc 変数の値をスキルIDとして実行します。これを指定するとスキルID固定値は無視されます。
 * @type variable
 * @default 0
 */

(() => {
    "use strict";

    const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");

    PluginManager.registerCommand(pluginName, "changeMember", args => {
        const selectMethod = args.selectMethod === "true";
        const selectActorId = $gameVariables.value(args.variableIdActor);
        const initializeActor = args.initializeActor === "true";
        if (selectActorId > 0) {
            if (initializeActor) {
                $gameActors.actor(selectActorId).setup(selectActorId);
            }
            if (selectMethod) {
                $gameParty.addActor(selectActorId);
            } else {
                $gameParty.removeActor(selectActorId);
            }
        }
    });

    PluginManager.registerCommand(pluginName, "changeClass", args => {
        const changeActorId = args.variableIdActor > 0 ? $gameVariables.value(args.variableIdActor) : args.fixActorId;
        const changeClassId = args.variableIdClass > 0 ? $gameVariables.value(args.variableIdClass) : args.fixClassId;
        const holdLevel = args.holdLevel === "true";
        if (changeActorId > 0 && changeClassId > 0) {
            $gameActors.actor(changeActorId).changeClass(changeClassId, holdLevel);
        }
    });

    PluginManager.registerCommand(pluginName, "nameInput", args => {
        const actorId = $gameVariables.value(args.variableIdActor);
        const max = args.maxWord;
        if (actorId > 0 && max > 0) {
            SceneManager.push(Scene_Name);
            SceneManager.prepareNextScene(actorId, max);
        }
    });

    PluginManager.registerCommand(pluginName, "requestBalloon", function (args) {
        const eventId = args.variableIdEvent > 0 ? $gameVariables.value(args.variableIdEvent) : args.fixEventId;
        const balloonId = args.variableIdBalloon > 0 ? $gameVariables.value(args.variableIdBalloon) : args.variableIdBalloon;
        const wait = args.wait === "true";
        $gameTemp.requestBalloon(this.character(eventId), balloonId);
        if (wait) {
            this.setWaitMode("balloon");
        }
    });

    PluginManager.registerCommand(pluginName, "changeSkill", function (args) {
        const selectAction = args.selectAction === "true";
        const changeActorId = args.variableIdActor > 0 ? $gameVariables.value(args.variableIdActor) : args.fixActorId;
        const variableIdSkill = args.variableIdSkill > 0 ? $gameVariables.value(args.variableIdSkill) : args.fixSkillId;
        if (selectAction) {
            $gameActors.actor(changeActorId).learnSkill(variableIdSkill);
        } else {
            $gameActors.actor(changeActorId).forgetSkill(variableIdSkill);
        }
    });

})();
